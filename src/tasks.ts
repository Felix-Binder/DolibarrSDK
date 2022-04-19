import { IOperator, TypeMap } from './types';

export type TasksPayload = {
    create: TypeMap,
    update: TypeMap,
    addTimeSpent: {
        date: any,
        duration: number,
        user_id: number,
        note: string
    }
}

export interface ITasks extends IOperator<TasksPayload["create"], TasksPayload["update"]> {
    addTimeSpent(id: number, payload: TasksPayload["addTimeSpent"]):Promise<any>
    roles(id: number):Promise<any>
}