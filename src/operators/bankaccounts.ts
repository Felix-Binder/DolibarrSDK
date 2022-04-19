import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IBankaccounts, Payload, Query } from '../bankaccounts';
import { Operator } from '../operator';

export class Bankaccounts extends Operator implements IBankaccounts {
    constructor(transporter: Transporter) {
        super(transporter, "bankaccounts")
    }

    async listMany(query?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: query
        });
    }
    
    async listOne(id: number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: Payload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: Payload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async getlines(id: number, query?: Query["getLines"]) {
        return await this._transporter.get(this._operator, `/${id}/lines`, {
            params: query
        });
    }

    async addLines(id: number, payload: Payload["addLines"]) {
        return await this._transporter.post(this._operator, `/${id}/lines`, payload);
    }

    async linkLines(id: number, line: number, payload: Payload["linkLines"]) {
        return await this._transporter.post(this._operator, `/${id}/lines/${line}/links`, payload);
    }

    async transfer(payload: Payload["transfer"]) {
        return await this._transporter.post(this._operator, `/bankaccounts/transfer`, payload);
    }
}
