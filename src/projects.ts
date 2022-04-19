import { IOperator, TypeMap } from './types';

export type ProjectsPayload = {
    create: TypeMap,
    update: TypeMap,
    roles: {
        userid?: number
    },
    tasks: {
        includetimespent?: 0 | 1 | 2
    },
    validate: TypeMap
}

export interface IProjects extends IOperator<ProjectsPayload["create"], ProjectsPayload["update"]> {
    roles(id: number, query: ProjectsPayload["roles"]):Promise<any>;
    tasks(id: number, query: ProjectsPayload["tasks"]):Promise<any>;
    validate(id: number, payload: ProjectsPayload["validate"]):Promise<any>;
}