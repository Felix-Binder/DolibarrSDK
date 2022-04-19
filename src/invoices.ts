import { IOperator, TypeMap } from './types';

export type InvoicesPayload = {
    create: TypeMap,
    update: TypeMap
}

export interface IInvoices extends IOperator<InvoicesPayload["create"], InvoicesPayload["update"]> {
}