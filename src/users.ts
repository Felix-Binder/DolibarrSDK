import { IOperator } from './types';

export type UsersPayload = {
}

export interface IUsers extends IOperator<any, any> {
    groups(id: number):Promise<any>;
    setGroup(user:number, group:number):Promise<any>;
    findEmail(email:string):Promise<any>;
    info():Promise<any>;
    login(options:any):Promise<any>;
}
