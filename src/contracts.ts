import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    close: {
        notrigger?: 0 | 1 // 1=Does not execute triggers, 0=Execute triggers
    },
    addLine: TypeMap,
    putLine: TypeMap,
    activateLine: {
        datestart: string
        dateend?: string
        comment?: string
    },
    unactivateLine: {
        datestart: string
        comment?: string
    },
    validate: {
        notrigger?: 0 | 1 // 1=Does not execute triggers, 0=Execute triggers
    },
}

export interface IContracts extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Close all services of a contract
     * @param {number} id ID of contract 
     * @param payload Request body payload
    **/
    close(id: number, payload: Payload["close"]):Promise<any>;

    /**
     * Get lines of a contract
     * @param {number} id ID of contract 
    **/
    getLines(id: number):Promise<any>;

    /**
     * Add a line to given contract 
     * @param {number} id ID of contract to update
     * @param payload Request body payload
    **/
    addLine(id: number, payload: Payload["addLine"]):Promise<any>;

    /**
     * Delete a line to given contract 
     * @param {number} id ID of contract to update
     * @param {number} line ID of line to delete
    **/
    delLine(id: number, line: number):Promise<any>;

    /**
     * Update a line to given contract 
     * @param {number} id ID of contract to update
     * @param {number} line ID of line to update
     * @param payload Request body payload
    **/
    putLine(id: number, line: number, payload: Payload["putLine"]):Promise<any>;

    /**
     * Activate a service line of a given contract 
     * @param {number} id ID of contract to activate
     * @param {number} line ID of line to activate
     * @param payload Request body payload
    **/
    activateLine(id: number, line: number, payload: Payload["activateLine"]):Promise<any>;

    /**
     * Unactivate a service line of a given contract
     * @param {number} id ID of contract to unactivate
     * @param {number} line ID of line to unactivate
     * @param payload Request body payload
    **/
    unactivateLine(id: number, line: number, payload: Payload["unactivateLine"]):Promise<any>;

    /**
     * Unactivate a service line of a given contract
     * @param {number} id ID of contract
     * @param payload Request body payload
    **/
    validate(id: number, payload: Payload["validate"]):Promise<any>;
}