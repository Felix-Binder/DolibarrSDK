import { IOperator } from './types';

export type TasksPayload = {
    addTimeSpent: {
        date: any,
        duration: number,
        user_id: number,
        note: string
    }
}

export interface ITasks extends IOperator<any, any> {
    addTimeSpent(id: number, payload: any):Promise<any>
    roles(id: number):Promise<any>
}