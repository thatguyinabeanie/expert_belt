from rest_framework import serializers
from .models import Tournament, Format, Organizer, Record, Phase, Match
from django.contrib.auth.models import User, Group


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "id"]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = ["id", "name"]


# class NameOnlyOrganizerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Organizer
#         fields = ["name"]


class TournamentSerializer(serializers.ModelSerializer):
    organizer = serializers.CharField(source="organizer.name")
    organizer_id = serializers.IntegerField(source="organizer.id")
    # players = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Tournament
        fields = [
            'tournament_id',
            'name',
            'game',
            'player_count',
            'format',
            'date',
            'organizer',
            "organizer_id",
            # "players"
        ]


class PhaseSerializer(serializers.ModelSerializer):
    organizer = serializers.CharField(source="organizer.name")
    organizer_id = serializers.IntegerField(source="organizer.id")

    class Meta:
        model = Phase


class TournamentRecordSerializer(serializers.ModelSerializer):
    # organizer = NameOnlyOrganizerSerializer()
    organizer = serializers.CharField(source="organizer.name")
    organizer_id = serializers.IntegerField(source="organizer.id")
    id = serializers.CharField(source="tournament_id")

    class Meta:
        model = Tournament
        fields = [
            "id",
            "name",
            "organizer",
            "organizer_id",
        ]


class RecordSerializer(serializers.ModelSerializer):
    tournament = TournamentRecordSerializer()
    player_username = serializers.CharField(source="player.username")

    class Meta:
        model = Record
        fields = [
            "player",
            "wins",
            "losses",
            "ties",
            "drop",
            "placing",
            "tournament",
            "player_username"
        ]


class FormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Format
        fields = ["name", "label"]


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = "__all__"
