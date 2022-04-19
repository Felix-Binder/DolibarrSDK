import { IOperator, TypeMap } from './types';

export type ProjectsPayload = {
    create: TypeMap,
    update: TypeMap,
    validate: TypeMap
}

export interface IProjects extends IOperator<ProjectsPayload["create"], ProjectsPayload["update"]> {
    roles(id: number):Promise<any>;
    tasks(id: number):Promise<any>;
    validate(id: number, payload: ProjectsPayload["validate"]):Promise<any>;
}