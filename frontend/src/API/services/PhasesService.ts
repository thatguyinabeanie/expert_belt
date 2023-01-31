/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPhaseList } from '../models/PaginatedPhaseList';
import type { PatchedPhaseRequest } from '../models/PatchedPhaseRequest';
import type { Phase } from '../models/Phase';
import type { PhaseRequest } from '../models/PhaseRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PhasesService {

    /**
     * @param advancingMin
     * @param autoResolve
     * @param bracket
     * @param checkIn
     * @param checkInTime
     * @param final
     * @param limit Number of results to return per page.
     * @param mode
     * @param offset The initial index from which to return the results.
     * @param phaseType
     * @param roundTime
     * @param rounds
     * @param timer
     * @param tournament
     * @returns PaginatedPhaseList
     * @throws ApiError
     */
    public static phasesList(
        advancingMin?: number,
        autoResolve?: boolean,
        bracket?: boolean,
        checkIn?: boolean,
        checkInTime?: number,
        final?: boolean,
        limit?: number,
        mode?: 'BO1' | 'BO3' | 'BO5',
        offset?: number,
        phaseType?: string,
        roundTime?: number,
        rounds?: number,
        timer?: boolean,
        tournament?: string,
    ): CancelablePromise<PaginatedPhaseList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/phases/',
            query: {
                'advancing_min': advancingMin,
                'auto_resolve': autoResolve,
                'bracket': bracket,
                'check_in': checkIn,
                'check_in_time': checkInTime,
                'final': final,
                'limit': limit,
                'mode': mode,
                'offset': offset,
                'phase_type': phaseType,
                'round_time': roundTime,
                'rounds': rounds,
                'timer': timer,
                'tournament': tournament,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Phase
     * @throws ApiError
     */
    public static phasesCreate(
        requestBody: PhaseRequest,
    ): CancelablePromise<Phase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/phases/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this phase.
     * @returns Phase
     * @throws ApiError
     */
    public static phasesRetrieve(
        id: number,
    ): CancelablePromise<Phase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/phases/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this phase.
     * @param requestBody
     * @returns Phase
     * @throws ApiError
     */
    public static phasesUpdate(
        id: number,
        requestBody: PhaseRequest,
    ): CancelablePromise<Phase> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/phases/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this phase.
     * @param requestBody
     * @returns Phase
     * @throws ApiError
     */
    public static phasesPartialUpdate(
        id: number,
        requestBody?: PatchedPhaseRequest,
    ): CancelablePromise<Phase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/phases/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this phase.
     * @returns void
     * @throws ApiError
     */
    public static phasesDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/phases/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
