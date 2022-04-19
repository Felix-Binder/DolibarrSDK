import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    addLines: {
        data: string,
        type: "TYP" | "VIR" | "PRE" | "LIQ" | "VAD" | "CB" | "CHQ",
        label: string,
        amount: number,
        category?: string,
        cheque_number?: string,
        heque_writer?: string,
        cheque_bank?: string,
        accountancycode?: string,
        datev?: string,
        num_releve?: string
    },
    linkLines: {
        url_id : number,
        url: string,
        label: string,
        type: "payment" | "company" | "member"
    },
    transfer: {
        bankaccount_from_id: number,
        bankaccount_to_id: number,
        date: string,
        description: string,
        amount: number,
        amount_to?: number
    }
}

export type Query = {
    getLines: {
        sqlfilters: string
    }
}

export interface IBankaccounts extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Get the list of lines of the account
     * @param {number} id ID of account
     * @param query Request query parameter
    **/
    getlines(id: number, query?: Query["getLines"]):Promise<any>;

    /**
     * Add a line to an account
     * @param {number} id ID of account
     * @param payload Request body payload
    **/
    addLines(id: number, payload: Payload["addLines"]):Promise<any>;

    /**
     * Add a link to an account line
     * @param {number} id ID of account
     * @param {number} line ID of account line
     * @param payload Request body payload
    **/
    linkLines(id: number, line: number, payload: Payload["linkLines"]):Promise<any>;
    
    /**
     * Create an internal wire transfer between two bank accounts
     * @param payload Request body payload
    **/ 
    transfer(payload: Payload["transfer"]):Promise<any>;
}