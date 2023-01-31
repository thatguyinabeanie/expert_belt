/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GameEnum } from './GameEnum';

export type TournamentRequest = {
    tournament_id: string;
    name?: string;
    game?: GameEnum;
    player_count?: number;
    format?: string;
    date?: string;
    organizer?: number;
};

