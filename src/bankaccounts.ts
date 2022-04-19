import { IOperator, TypeMap } from './types';

export type BankaccountsPayload = {
    create: TypeMap,
    update: TypeMap,
    transfer: TypeMap
}

export interface IBankaccounts extends IOperator<BankaccountsPayload["create"], BankaccountsPayload["update"]> {
    getlines(account: number):Promise<any>;
    addLines(account: number):Promise<any>;
    linkLines(account: number):Promise<any>;
    transfer(payload: BankaccountsPayload["transfer"]):Promise<any>;
}