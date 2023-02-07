from expert_belt_api.models import Tournament, Organizer, Record, Match, Phase
from django.contrib.auth.models import User
import environ
import os
from pathlib import Path

from urllib.request import urlopen

import json
from datetime import datetime
from datetime import timezone
import boto3
from . import dynamodb_import

env = environ.Env()
BASE_DIR = Path(__file__).resolve().parent.parent.parent
environ.Env.read_env(os.path.join(BASE_DIR.parent, ".env"))

# ./man ./m

key = env("TOURS_API_KEY")
limit = 10
base_url = "https://play.limitlesstcg.com/ext/dinodata"
tour_url = f"{base_url}/tournaments"
tours_link = f"{tour_url}?key={key}&game=vgc&limit={limit}"
players_link = f"{base_url}/players?key={key}"
matches_link = f"{base_url}/matches?key={key}"


def get_phase(phase, tournament, phase_number):
    phase, created = Phase.objects.get_or_create(
        phase_number=phase_number,
        phase_type=phase["type"],
        mode=phase["mode"],
        rounds=phase["rounds"],
        final=phase["final"],
        timer=phase.get("timer", None),
        round_time=phase.get("roundTime", None),
        check_in=phase.get("checkin", None),
        check_in_time=phase.get("checkinTime", None),
        auto_resolve=phase.get("autoresolve", None),
        bracket=phase.get("bracket", False),
        advancing_min=phase.get("advancingMin", None),
        tournament=tournament,
    )
    return phase


def import_tournaments(tournaments=[]):
    new_tournamenets = []
    all_tournaments = []

    print("Importing Tournaments...")
    for tournament in tournaments:
        # org = tournament["organizer"]
        # organizer_set[org["id"]] = org

        org_id = tournament["organizer"]["id"]
        org_name = tournament["organizer"]["name"]
        org = None

        try:
            org, created = Organizer.objects.get_or_create(id=org_id, name=org_name)
        except:
            org = Organizer.objects.get(id=org_id)

        tourid = tournament["id"]
        # print(f"Processing Tournament Meta Data - {tourid}")

        tour, created = Tournament.objects.get_or_create(
            tournament_id=tourid,
            game=tournament["game"],
            organizer=org,
            name=tournament["name"],
            date=datetime.fromisoformat(tournament["date"][:-1]).astimezone(
                timezone.utc
            ),
            format=tournament["format"] or "",
            player_count=tournament["players"],
        )

        phases = [
            get_phase(phase, tour, phase_number).id
            for (phase_number, phase) in tournament["phases"].items()
        ]

        # print(phases)

        if created:
            new_tournamenets.append(tour)
        all_tournaments.append(tour)

    return (new_tournamenets, all_tournaments)


def import_player_records(tournaments=[]):
    players = {"not_a_real_name": 1}

    for tournament in tournaments:
        # for new tours
        tour_id = tournament.tournament_id
        # tour_name = tournament.name

        # existing tours
        # tour_id = tournament["id"]
        # tour_name = tournament["name"]
        # tour_obj = Tournament.objects.get(tournament_id=tour_id)

        player_records_url = f"{players_link}&id={tour_id}"
        print(f"Player records URL {player_records_url}")

        response = urlopen(player_records_url)
        player_records = json.loads(response.read())
        for player_record in player_records:
            player_name = player_record["name"]
            if player_name in players:
                player = players[player_name]
            else:
                player_filter = User.objects.filter(username=player_name)
                if player_filter.count() > 0:
                    player = player_filter.first()
                else:
                    player, created = User.objects.get_or_create(username=player_name)
                players[player_name] = player

            Record.objects.get_or_create(
                player=player,
                tournament=tournament,
                wins=player_record["record"]["wins"],
                losses=player_record["record"]["losses"],
                ties=player_record["record"]["ties"],
                drop=player_record["drop"],
                placing=player_record["placing"],
            )


def import_matches(tournaments=[]):
    print("importing matches")
    for tournament in tournaments:
        tour_id = tournament.tournament_id

        # existing tours
        # tour_id = tournament["id"]
        # tour_name = tournament["name"]
        # tour_obj = Tournament.objects.get(tournament_id=tour_id)

        print(f"Processing Tournament Matches - {tour_id}")
        matches_url = f"{matches_link}&id={tour_id}"
        # print(f"Matches URL {matches_url}")

        response = urlopen(matches_url)
        matches = json.loads(response.read())
        for match in matches:
            player1, created = User.objects.get_or_create(username=match.get("player1"))

            if match.get("player2") is None:
                player2 = None
            else:
                player2, created = User.objects.get_or_create(username=match["player2"])

            if match["winner"] == player1.username:
                winner = player1
            else:
                winner = player2

            Match.objects.get_or_create(
                tournament=tournament,
                player1=player1,
                player2=player2,
                round=match["round"],
                phase=Phase.objects.filter(
                    tournament=tournament, phase_number=match["phase"]
                ).first(),
                winner=winner,
            )


def run():
    response = urlopen(tours_link)
    tours = json.loads(response.read())
    new_tournaments, all_tournaments = import_tournaments(tournaments=tours)

    # dynamodb_import.import_teams_to_dynamodb(tournaments=tours)

    import_player_records(tournaments=new_tournaments)
    import_matches(tournaments=new_tournaments)

    # import_player_records(tournaments=all_tournaments)
    # import_matches(tournaments=all_tournaments)
