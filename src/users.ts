import { IOperator, TypeMap } from './types';

export type UsersPayload = {
    create: TypeMap,
    update: TypeMap
}

export interface IUsers extends IOperator<UsersPayload["create"], UsersPayload["update"]> {
    groups(id: number):Promise<any>;
    setGroup(user:number, group:number):Promise<any>;
    findEmail(email:string):Promise<any>;
    info():Promise<any>;
    login(options:any):Promise<any>;
}
