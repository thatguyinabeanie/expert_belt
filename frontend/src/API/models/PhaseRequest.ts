/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModeEnum } from './ModeEnum';

export type PhaseRequest = {
    phase_type?: string;
    mode?: ModeEnum;
    rounds?: number;
    final?: boolean;
    timer?: boolean | null;
    round_time?: number | null;
    auto_resolve?: boolean | null;
    check_in?: boolean | null;
    check_in_time?: number | null;
    bracket?: boolean | null;
    advancing_min?: number | null;
    tournament: string;
};

