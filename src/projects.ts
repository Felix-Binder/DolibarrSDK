import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    validate: {
        notrigger?: 0 | 1
    }
}

export type Query = {
    roles: {
        userid?: number
    },
    tasks: {
        includetimespent?: 0 | 1 | 2 // 0=Return only list of tasks. 1=Include a summary of time spent, 2=Include details of time spent lines (2 is no implemented yet)
    }
}

export interface IProjects extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Get roles a user is assigned to a project with
     * @param {number} id ID of project 
     * @param query Request query parameter
    **/
    roles(id: number, query?: Query["roles"]):Promise<any>;

    /**
     * Get tasks of a project
     * @param {number} id ID of project 
     * @param query Request query parameter
    **/
    tasks(id: number, query?: Query["tasks"]):Promise<any>;

    /**
     * Validate a project
     * @param {number} id ID of project 
     * @param payload Request body payload
    **/
    validate(id: number, payload: Payload["validate"]):Promise<any>;
}