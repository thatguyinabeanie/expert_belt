/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Group } from './Group';

export type PaginatedGroupList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Group>;
};

