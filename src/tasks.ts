import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    addTimeSpent: {
        date: any,
        duration: number,
        user_id: number,
        note: string
    }
}

export type Query = {
    roles: {
        userid?: number // Id of user (0 = connected user)
    }
}

export interface ITasks extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Add time spent to a task of a project
     * @param {number} id ID of task 
     * @param payload Request body payload
    **/
    addTimeSpent(id: number, payload: Payload["addTimeSpent"]):Promise<any>

    /**
     * Get roles a user is assigned to a task with
     * @param {number} id ID of task 
     * @param query Request query parameter
    **/
    roles(id: number, query?: Query["roles"]):Promise<any>
}