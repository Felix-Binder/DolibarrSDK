import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    addLine: TypeMap,
    putLine: TypeMap,
    addPayments: TypeMap,
    validate: {
        idwarehouse?: number,
        notrigger?: 0 | 1
    }
}

export interface ISupplierinvoices extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Get lines of a supplier invoice
     * @param {number} id ID of supplier invoice
    **/
    getLines(id: number):Promise<any>;

    /**
     * Add a line to given supplier invoice
     * @param {number} id ID of supplier invoice
     * @param payload Request body payload
    **/
    addLine(id: number, payload: Payload["addLine"]):Promise<any>;

    /**
     * Deletes a line of a given supplier invoice
     * @param {number} id ID of supplier invoice
     * @param {number} line ID of the line to delete
    **/
    delLine(id: number, line: number):Promise<any>;

    /**
     * Update a line to a given supplier invoice 
     * @param {number} id ID of supplier invoice
     * @param {number} line ID of the line to update
     * @param payload Request body payload
    **/
    putLine(id: number, line: number, payload: Payload["putLine"]):Promise<any>;

    /**
     * Get list of payments of a given supplier invoice 
     * @param {number} id ID of supplier invoice
    **/
    getPayments(id: number):Promise<any>;

    /**
     * Add payment line to a specific supplier invoice with the remain to pay as amount
     * @param {number} id ID of supplier invoice
     * @param payload Request body payload
    **/
    addPayment(id: number, payload: Payload["addPayments"]):Promise<any>;

    /**
     * Validate an invoice
     * @param {number} id ID of supplier invoice
     * @param payload Request body payload
    **/
    validate(id: number, payload: Payload["validate"]):Promise<any>;
}