import { IOperator, TypeMap, DolibarrRequestOptions } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    createUser: TypeMap
}

export type Query = {
    findEmail: {
        includecount?: string // Count and return also number of elements the contact is used as a link for
        includeroles?: string // Includes roles of the contact
    }
}

export interface IContacts extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Get categories for a contact
     * @param {number} id ID of contact
     * @param query Request query parameter
    **/
    getCategories(id: number, query?: DolibarrRequestOptions):Promise<any>;

    /**
     * Remove the link between a category and a contact 
     * @param {number} id ID of contact
     * @param {number} category ID of category
    **/
    delCategory(id: number, category: number):Promise<any>;

    /**
     * Add a category to a contact
     * @param {number} id ID of contact
     * @param {number} category ID of category
    **/
    addCategory(id: number, category: number):Promise<any>;

    /**
     * Create an user account object from contact (external user)
     * @param {number} id ID of contact
     * @param payload Request body payload
    **/
    createUser(id: number, payload: Payload["createUser"]):Promise<any>;

    /**
     * Get properties of a contact object by Email 
     * @param {number} id ID of contact
     * @param query Request query parameter
    **/
    findEmail(email: string, query?: Query["findEmail"]):Promise<any>;
}