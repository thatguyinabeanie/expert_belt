/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Format } from '../models/Format';
import type { FormatRequest } from '../models/FormatRequest';
import type { PaginatedFormatList } from '../models/PaginatedFormatList';
import type { PatchedFormatRequest } from '../models/PatchedFormatRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FormatsService {

    /**
     * @param label
     * @param limit Number of results to return per page.
     * @param name
     * @param offset The initial index from which to return the results.
     * @returns PaginatedFormatList
     * @throws ApiError
     */
    public static formatsList(
        label?: string,
        limit?: number,
        name?: string,
        offset?: number,
    ): CancelablePromise<PaginatedFormatList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/formats/',
            query: {
                'label': label,
                'limit': limit,
                'name': name,
                'offset': offset,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Format
     * @throws ApiError
     */
    public static formatsCreate(
        requestBody?: FormatRequest,
    ): CancelablePromise<Format> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/formats/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name A unique value identifying this format.
     * @returns Format
     * @throws ApiError
     */
    public static formatsRetrieve(
        name: string,
    ): CancelablePromise<Format> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/formats/{name}/',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @param name A unique value identifying this format.
     * @param requestBody
     * @returns Format
     * @throws ApiError
     */
    public static formatsUpdate(
        name: string,
        requestBody?: FormatRequest,
    ): CancelablePromise<Format> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/formats/{name}/',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name A unique value identifying this format.
     * @param requestBody
     * @returns Format
     * @throws ApiError
     */
    public static formatsPartialUpdate(
        name: string,
        requestBody?: PatchedFormatRequest,
    ): CancelablePromise<Format> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/formats/{name}/',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name A unique value identifying this format.
     * @returns void
     * @throws ApiError
     */
    public static formatsDestroy(
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/formats/{name}/',
            path: {
                'name': name,
            },
        });
    }

}
