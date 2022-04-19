import { IOperator, TypeMap } from './types';

export type BankaccountsPayload = {
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

export interface IBankaccounts extends IOperator<BankaccountsPayload["create"], BankaccountsPayload["update"]> {
    getlines(account: number):Promise<any>;
    addLines(account: number, payload: BankaccountsPayload["addLines"]):Promise<any>;
    linkLines(account: number, line: number, payload: BankaccountsPayload["linkLines"]):Promise<any>;
    transfer(payload: BankaccountsPayload["transfer"]):Promise<any>;
}