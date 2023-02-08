/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRecordList } from '../models/PaginatedRecordList';
import type { PatchedRecordRequest } from '../models/PatchedRecordRequest';
import type { Record } from '../models/Record';
import type { RecordRequest } from '../models/RecordRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecordsService {

    /**
     * @param drop
     * @param limit Number of results to return per page.
     * @param losses
     * @param offset The initial index from which to return the results.
     * @param placing
     * @param player
     * @param ties
     * @param tournament
     * @param wins
     * @returns PaginatedRecordList
     * @throws ApiError
     */
    public static recordsList(
        drop?: number,
        limit?: number,
        losses?: number,
        offset?: number,
        placing?: number,
        player?: number,
        ties?: number,
        tournament?: string,
        wins?: number,
    ): CancelablePromise<PaginatedRecordList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/records/',
            query: {
                'drop': drop,
                'limit': limit,
                'losses': losses,
                'offset': offset,
                'placing': placing,
                'player': player,
                'ties': ties,
                'tournament': tournament,
                'wins': wins,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Record
     * @throws ApiError
     */
    public static recordsCreate(
        requestBody: RecordRequest,
    ): CancelablePromise<Record> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/records/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this record.
     * @returns Record
     * @throws ApiError
     */
    public static recordsRetrieve(
        id: number,
    ): CancelablePromise<Record> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/records/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this record.
     * @param requestBody
     * @returns Record
     * @throws ApiError
     */
    public static recordsUpdate(
        id: number,
        requestBody: RecordRequest,
    ): CancelablePromise<Record> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/records/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this record.
     * @param requestBody
     * @returns Record
     * @throws ApiError
     */
    public static recordsPartialUpdate(
        id: number,
        requestBody?: PatchedRecordRequest,
    ): CancelablePromise<Record> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/records/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this record.
     * @returns void
     * @throws ApiError
     */
    public static recordsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/records/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
