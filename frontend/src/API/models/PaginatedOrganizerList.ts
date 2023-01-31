/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Organizer } from './Organizer';

export type PaginatedOrganizerList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Organizer>;
};

