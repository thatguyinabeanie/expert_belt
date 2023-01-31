/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tournament } from './Tournament';

export type PaginatedTournamentList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Tournament>;
};

