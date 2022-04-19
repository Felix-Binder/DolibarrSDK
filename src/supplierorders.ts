import { IOperator, TypeMap } from './types';

export type SupplierordersPayload = {
    create: TypeMap,
    update: TypeMap,
    validate: TypeMap
}

export interface ISupplierorders extends IOperator<SupplierordersPayload["create"], SupplierordersPayload["update"]> {
    validate(id: number, payload: SupplierordersPayload["validate"]):Promise<any>;
}