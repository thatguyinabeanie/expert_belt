/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserList } from '../models/PaginatedUserList';
import type { PatchedUserRequest } from '../models/PatchedUserRequest';
import type { User } from '../models/User';
import type { UserRequest } from '../models/UserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param username
     * @returns PaginatedUserList
     * @throws ApiError
     */
    public static usersList(
        id?: number,
        limit?: number,
        offset?: number,
        username?: string,
    ): CancelablePromise<PaginatedUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
            query: {
                'id': id,
                'limit': limit,
                'offset': offset,
                'username': username,
            },
        });
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static usersCreate(
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @returns User
     * @throws ApiError
     */
    public static usersRetrieve(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static usersUpdate(
        id: number,
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static usersPartialUpdate(
        id: number,
        requestBody?: PatchedUserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * API endpoint that allows users to be viewed or edited.
     * @param id A unique integer value identifying this user.
     * @returns void
     * @throws ApiError
     */
    public static usersDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
