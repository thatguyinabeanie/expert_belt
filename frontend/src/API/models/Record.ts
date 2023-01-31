/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TournamentRecord } from './TournamentRecord';

export type Record = {
    player?: number;
    wins?: number | null;
    losses?: number | null;
    ties?: number | null;
    drop?: number | null;
    placing?: number | null;
    tournament: TournamentRecord;
    player_username: string;
};

