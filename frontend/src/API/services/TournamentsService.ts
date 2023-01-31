/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTournamentList } from '../models/PaginatedTournamentList';
import type { PatchedTournamentRequest } from '../models/PatchedTournamentRequest';
import type { Tournament } from '../models/Tournament';
import type { TournamentRequest } from '../models/TournamentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TournamentsService {

    /**
     * @param date
     * @param format
     * @param game
     * @param limit Number of results to return per page.
     * @param name
     * @param offset The initial index from which to return the results.
     * @param organizer
     * @param playerCount
     * @param players
     * @param tournamentId
     * @returns PaginatedTournamentList
     * @throws ApiError
     */
    public static tournamentsList(
        date?: string,
        format?: string,
        game?: 'VGC',
        limit?: number,
        name?: string,
        offset?: number,
        organizer?: number,
        playerCount?: number,
        players?: Array<number>,
        tournamentId?: string,
    ): CancelablePromise<PaginatedTournamentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tournaments/',
            query: {
                'date': date,
                'format': format,
                'game': game,
                'limit': limit,
                'name': name,
                'offset': offset,
                'organizer': organizer,
                'player_count': playerCount,
                'players': players,
                'tournament_id': tournamentId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Tournament
     * @throws ApiError
     */
    public static tournamentsCreate(
        requestBody: TournamentRequest,
    ): CancelablePromise<Tournament> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tournaments/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param tournamentId A unique value identifying this tournament.
     * @returns Tournament
     * @throws ApiError
     */
    public static tournamentsRetrieve(
        tournamentId: string,
    ): CancelablePromise<Tournament> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tournaments/{tournament_id}/',
            path: {
                'tournament_id': tournamentId,
            },
        });
    }

    /**
     * @param tournamentId A unique value identifying this tournament.
     * @param requestBody
     * @returns Tournament
     * @throws ApiError
     */
    public static tournamentsUpdate(
        tournamentId: string,
        requestBody: TournamentRequest,
    ): CancelablePromise<Tournament> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/tournaments/{tournament_id}/',
            path: {
                'tournament_id': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param tournamentId A unique value identifying this tournament.
     * @param requestBody
     * @returns Tournament
     * @throws ApiError
     */
    public static tournamentsPartialUpdate(
        tournamentId: string,
        requestBody?: PatchedTournamentRequest,
    ): CancelablePromise<Tournament> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/tournaments/{tournament_id}/',
            path: {
                'tournament_id': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param tournamentId A unique value identifying this tournament.
     * @returns void
     * @throws ApiError
     */
    public static tournamentsDestroy(
        tournamentId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/tournaments/{tournament_id}/',
            path: {
                'tournament_id': tournamentId,
            },
        });
    }

}
