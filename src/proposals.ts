import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    close: {
        status: 2 | 3 // 2=accepted | 3=refused
        note_private?: string, // Add this mention at end of private note 
        notrigger?: number // Disabled triggers
    },
    addLines: TypeMap,
    putLine: TypeMap,
    validate: {
        notrigger?: 0 | 1
    }
}

export type Query = {
    ref: {
        contact_list?: 0 | 1
    }
}

type ContactType =  "BILLING" | "SHIPPING" | "CUSTOMER"

export interface IProposals extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Close (Accept or refuse) a quote / commercial proposal 
     * @param {number} id Commercial proposal ID
     * @param payload Request body payload
    **/
    close(id: number, payload: Payload["close"]):Promise<any>;

    /**
     * Delete a contact type of given commercial proposal
     * @param {number} id Id of commercial proposal to update
     * @param {number} contact Row key of the contact in the array contact_ids
     * @param {ContactType} type Type of the contact
    **/
    delContact(id: number, contact: number, type: ContactType):Promise<any>;
    
    /**
     * Add a contact type of given commercial proposal
     * @param {number} id Id of commercial proposal to update
     * @param {number} contact Id of contact to add
     * @param {ContactType} type Type of the contact
    **/
    addContact(id: number, contact: number, type: ContactType):Promise<any>;

    /**
     * Get lines of a commercial proposal
     * @param {number} id Id of commercial proposal to update
    **/
    getLines(id: number):Promise<any>;

    /**
     * Add a line to given commercial proposal
     * @param {number} id Id of commercial proposal to update
     * @param payload Request body payload
    **/
    addLine(id: number, payload: Payload["addLines"]):Promise<any>;
 
    /**
     * Delete a line of given commercial proposal 
     * @param {number} id Id of commercial proposal to update
     * @param {number} line Id of line to delete
    **/
    delLine(id: number, line: number):Promise<any>;

    /**
     * Update a line of given commercial proposal
     * @param {number} id Id of commercial proposal to update
     * @param {number} line Id of line to update
     * @param payload Request body payload
    **/
    putLine(id: number, line: number, payload: Payload["putLine"]):Promise<any>;
    
    /**
     * Set a commercial proposal billed. Could be also called setbilled 
     * @param {number} id Commercial proposal ID
    **/
    setInvoiced(id: number):Promise<any>;


    /**
     * Set a proposal to draft
     * @param id Order ID
    **/
    setDraft(id: number):Promise<any>;

    /**
     * Validate a commercial proposal
     * @param id Commercial proposal ID
     * @param payload Request body payload
    **/
    validate(id: number, payload: Payload["validate"]):Promise<any>;
    
    /**
     * Get properties of an proposal object by ref_ext 
     * @param ref_ext External reference of object
     * @param query Request query parameter
    **/
    ref_ext(ref_ext: string, query?: Query):Promise<any>;

    /**
     * Get properties of an proposal object by ref
     * @param ref Ref of object
     * @param query Request query parameter
    **/
    ref(ref: string, query?: Query):Promise<any>;
}
