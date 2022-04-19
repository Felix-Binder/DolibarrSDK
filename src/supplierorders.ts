import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap,
    validate: {
        idwarehouse?: number,
        notrigger?: 0 | 1
    }
}

export interface ISupplierorders extends IOperator<Payload["create"], Payload["update"]> {
    /**
     * Validate an order
     * @param {number} id ID of order
     * @param payload Request body payload
    **/
   validate(id: number, payload: Payload["validate"]):Promise<any>;
}