/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Record } from './Record';

export type PaginatedRecordList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Record>;
};

