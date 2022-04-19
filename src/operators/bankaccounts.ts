import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IBankaccounts, BankaccountsPayload } from '../bankaccounts';
import { Operator } from '../operator';

export class Bankaccounts extends Operator implements IBankaccounts {
    constructor(transporter: Transporter) {
        super(transporter, "bankaccounts")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id: number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: BankaccountsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: BankaccountsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async getlines(account: number) {
        return await this._transporter.get(this._operator, `/${account}/lines`);
    }

    async addLines(account: number, payload: BankaccountsPayload["addLines"]) {
        return await this._transporter.post(this._operator, `/${account}/lines`, payload);
    }

    async linkLines(account: number, line: number, payload: BankaccountsPayload["linkLines"]) {
        return await this._transporter.post(this._operator, `/${account}/lines/${line}/links`, payload);
    }

    async transfer(payload: BankaccountsPayload["transfer"]) {
        return await this._transporter.post(this._operator, `/bankaccounts/transfer`, payload);
    }
}
