import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    addContact: {
        fk_socpeople: number, // Id of thirdparty contact (if source = 'external') or id of user (if souce = 'internal') to link ,
        type_contact: string // Type of contact (code). Must a code found into table llx_c_type_contact. For example: BILLING ,
        source: "external" | "internal", // external=Contact extern (llx_socpeople), internal=Contact intern (llx_user) ,
        notrigger?: 0 | 1 // Disable all triggers
    },
    addLine: TypeMap,
    putLine: TypeMap,
    addPayment: {
        datepaye: string,
        paymentid: number,
        closepaidinvoices: "yes" | "no" // Close paid invoices = ['yes', 'no'],
        accountid: number,
        num_payment?: string,
        comment?: string, // Note private
        chqemetteur?: string, // Payment issuer (mandatory if paymentcode = 'CHQ')
        chqbank?: string, // Issuer bank name
    },
    setDraft: {
        idwarehouse?: number // Warehouse ID
    },
    setPaid: {
        close_code?: string, // Code filled if we classify to 'Paid completely' when payment is not complete (for escompte for example) ,
        close_note?: string // Comment defined if we classify to 'Paid' when payment is not complete (for escompte for example)
    },
    validate: {
        idwarehouse?: number, // Warehouse ID
        notrigger?: 0 | 1 // 1=Does not execute triggers, 0= execute triggers
    },
    putPayment: {
        num_payment?: string
    },
    paymentsdistributed: {
        arrayofamounts: string[], // Array with id of invoices with amount to pay for each invoice ,
        datepaye: string, // Payment date ,
        paymentid: number, // Payment mode Id ,
        closepaidinvoices: "yes" | "no", // Close paid invoices = ['yes', 'no'],
        accountid: number // Account Id ,
        num_payment?: string // Payment number (optional) ,
        comment?: string // Note private (optional) ,
        chqemetteur?: string // Payment issuer (mandatory if paiementcode = 'CHQ') ,
        chqbank?: string // Issuer bank name (optional) ,
        ref_ext?: string // External reference (optional) ,
        accepthigherpayment?: boolean //  Accept higher payments that it remains to be paid (optional)
    }
}

export interface IInvoices extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Delete a contact type of given invoice
     * @param {number} id ID of invoice to update
     * @param {number} contact Row key of the contact in the array contact_ids.
     * @param {number} type Type of the contact (BILLING, SHIPPING, CUSTOMER).
    **/
    delContactType(id: number, contact: number, type: string):Promise<any>;
    
    /**
     * Add a contact type of given invoice
     * @param {number} id ID of invoice to update
     * @param {number} contact ID of contact to add
     * @param {number} type Type of the contact (BILLING, SHIPPING, CUSTOMER).
    **/
    addContactType(id: number, contact: number, type: string):Promise<any>;

    /**
     * Adds a contact to an invoice
     * @param {number} id ID of invoice to update
     * @param payload Request body payload
    **/
    addContact(id: number, payload: Payload["addContact"]):Promise<any>;

    /**
     * Get discount from invoice
     * @param {number} id ID of invoice
    **/
    getDiscount(id: number):Promise<any>;

    /**
     * Get lines of a supplier invoice
     * @param {number} id ID of invoice
    **/
    getLines(id: number):Promise<any>;

    /**
     * Add a line to given supplier invoice
     * @param {number} id ID of invoice
     * @param payload Request body payload
    **/
    addLine(id: number, payload: Payload["addLine"]):Promise<any>;
 
    /**
     * Deletes a line of a given supplier invoice
     * @param {number} id ID of invoice
     * @param {number} line ID of the line to delete
    **/
    delLine(id: number, line: number):Promise<any>;
 
    /**
     * Update a line to a given supplier invoice 
     * @param {number} id ID of invoice
     * @param {number} line ID of the line to update
     * @param payload Request body payload
    **/
    putLine(id: number, line: number, payload: Payload["putLine"]):Promise<any>;
 
    /**
     * Create a discount (credit available) for a credit note or a deposit
     * @param {number} id ID of invoice
    **/ 
    markAsCreditAvailable(id: number):Promise<any>;
 
    /**
     * Get list of payments of a given invoice
     * @param {number} id ID of invoice
    **/ 
    getPayments(id: number):Promise<any>;

    /**
     * Add payment line to a specific invoice with the remain to pay as amount
     * @param {number} id ID of invoice
     * @param payload Request body payload
    **/ 
    addPayment(id: number, payload: Payload["addPayment"]):Promise<any>;

    /**
     * Sets an invoice as draft 
     * @param {number} id ID of invoice
     * @param payload Request body payload
    **/ 
    setDraft(id: number, payload: Payload["setDraft"]):Promise<any>;

    /**
     * Sets an invoice as draft 
     * @param {number} id ID of invoice
     * @param payload Request body payload
    **/ 
    setPaid(id: number, payload: Payload["setPaid"]):Promise<any>;

    /**
     * Sets an invoice as unpaid 
     * @param {number} id ID of invoice
    **/ 
    setUnpaid(id: number):Promise<any>;

    /**
     * Add an available credit note discount to payments of an existing invoice
     * @param {number} id ID of invoice
     * @param {discount} id ID of a discount coming from a credit note
    **/ 
    usecreditnote(id: number, discount: number):Promise<any>;

    /**
     * Add a discount line into an invoice (as an invoice line) using an existing absolute discount 
     * @param {number} id ID of invoice
     * @param {discount} id ID of discount
    **/ 
    usediscount(id: number, discount: number):Promise<any>;

    /**
     * Validate an invoice 
     * @param {number} id ID of invoice
     * @param payload Request body payload
    **/ 
    validate(id: number, payload: Payload["validate"]):Promise<any>;

    /**
     * Create an invoice using an existing order
     * @param {number} order ID of the order
    **/ 
    createfromorder(order: number):Promise<any>;

    /**
     * Update a payment
     * @param {number} id Id of payment
     * @param payload Request body payload
    **/ 
    putPayment(id: number, payload: Payload["putPayment"]):Promise<any>;

    /**
     * Add a payment to pay partially or completely one or several invoices
     * @param payload Request body payload
    **/ 
    paymentsdistributed(payload: Payload["paymentsdistributed"]):Promise<any>;

    /**
     * Get properties of an invoice object by ref_ext 
     * @param ref External reference of object
    **/ 
    ref_ext(ref_ext: string):Promise<any>;
    
    /**
     * Get properties of an invoice object by ref
     * @param ref Ref of object
    **/ 
    ref(ref: string):Promise<any>;
}