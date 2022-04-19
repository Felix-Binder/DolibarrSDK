import { IOperator, TypeMap } from './types';

export type SupplierinvoicesPayload = {
    create: TypeMap,
    update: TypeMap,
    addLine: TypeMap,
    putLine: TypeMap,
    addPayments: TypeMap,
}

export interface ISupplierinvoices extends IOperator<SupplierinvoicesPayload["create"], SupplierinvoicesPayload["update"]> {
    getLines(supplierinvoices: number):Promise<any>;
    addLine(supplierinvoices: number, payload: SupplierinvoicesPayload["addLine"]):Promise<any>;
    delLine(supplierinvoices: number, line: number):Promise<any>;
    putLine(supplierinvoices: number, line: number, payload: SupplierinvoicesPayload["putLine"]):Promise<any>;
    addPayments(id: number, payload: SupplierinvoicesPayload["addPayments"]):Promise<any>;
    validate(id: number):Promise<any>;
}