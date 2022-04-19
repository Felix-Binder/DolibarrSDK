import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap
}

export interface IUsers extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * List the groups of a user
     * @param {number} id ID of user
    **/
    groups(id: number):Promise<any>;

    /**
     * Add a user into a group 
     * @param {number} id ID of user
     * @param {number} group ID of group
    **/
    setGroup(id:number, group:number):Promise<any>;

    /**
     * Get properties of an user object by Email 
     * @param {string} email Email of user
    **/
    findEmail(email:string):Promise<any>;

    /**
     * Get more properties of a user 
    **/
    info():Promise<any>;

    /**
     * Get properties of an user object by Email 
     * @param {string} login Login of user
    **/
    login(login:any):Promise<any>;
}
