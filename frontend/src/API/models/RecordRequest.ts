/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TournamentRecordRequest } from './TournamentRecordRequest';

export type RecordRequest = {
    player?: number;
    wins?: number | null;
    losses?: number | null;
    ties?: number | null;
    drop?: number | null;
    placing?: number | null;
    tournament: TournamentRecordRequest;
    player_username: string;
};

