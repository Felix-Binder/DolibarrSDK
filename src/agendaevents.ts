import { IOperator, TypeMap } from './types';

export type AgendaeventsPayload = {
    create: TypeMap,
    update: TypeMap
}

export interface IAgendaevents extends IOperator<AgendaeventsPayload["create"], AgendaeventsPayload["update"]> {}