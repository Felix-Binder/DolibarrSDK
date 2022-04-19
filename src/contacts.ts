import { IOperator, TypeMap, DolibarrRequestOptions } from './types';

export type ContactsPayload = {
    create: TypeMap,
    update: TypeMap,
    createUser: TypeMap
}

export interface IContacts extends IOperator<ContactsPayload["create"], ContactsPayload["update"]> {
    getCategories(contact: number, options: DolibarrRequestOptions):Promise<any>;
    delCategory(contact: number, category: number):Promise<any>;
    addCategory(contact: number, category: number):Promise<any>;
    createUser(contact: number, payload: ContactsPayload["createUser"]):Promise<any>;
    findEmail(email: string):Promise<any>;
}