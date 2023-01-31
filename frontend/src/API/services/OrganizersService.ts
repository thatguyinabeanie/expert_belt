/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organizer } from '../models/Organizer';
import type { OrganizerRequest } from '../models/OrganizerRequest';
import type { PaginatedOrganizerList } from '../models/PaginatedOrganizerList';
import type { PatchedOrganizerRequest } from '../models/PatchedOrganizerRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrganizersService {

    /**
     * @param id
     * @param limit Number of results to return per page.
     * @param name
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizerList
     * @throws ApiError
     */
    public static organizersList(
        id?: number,
        limit?: number,
        name?: string,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizerList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizers/',
            query: {
                'id': id,
                'limit': limit,
                'name': name,
                'offset': offset,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Organizer
     * @throws ApiError
     */
    public static organizersCreate(
        requestBody: OrganizerRequest,
    ): CancelablePromise<Organizer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizers/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique value identifying this organizer.
     * @returns Organizer
     * @throws ApiError
     */
    public static organizersRetrieve(
        id: number,
    ): CancelablePromise<Organizer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizers/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique value identifying this organizer.
     * @param requestBody
     * @returns Organizer
     * @throws ApiError
     */
    public static organizersUpdate(
        id: number,
        requestBody: OrganizerRequest,
    ): CancelablePromise<Organizer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/organizers/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique value identifying this organizer.
     * @param requestBody
     * @returns Organizer
     * @throws ApiError
     */
    public static organizersPartialUpdate(
        id: number,
        requestBody?: PatchedOrganizerRequest,
    ): CancelablePromise<Organizer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/organizers/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique value identifying this organizer.
     * @returns void
     * @throws ApiError
     */
    public static organizersDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizers/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
