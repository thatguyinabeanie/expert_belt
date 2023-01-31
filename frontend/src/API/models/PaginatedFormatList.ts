/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Format } from './Format';

export type PaginatedFormatList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Format>;
};

