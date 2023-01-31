/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Phase } from './Phase';

export type PaginatedPhaseList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Phase>;
};

