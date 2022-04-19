import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITasks, Payload, Query } from '../tasks';
import { Operator } from '../operator';

export class Tasks extends Operator implements ITasks {
    constructor(transporter: Transporter) {
        super(transporter, "tasks")
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

    async addTimeSpent(id:number, payload: Payload["addTimeSpent"]) {
        return await this._transporter.post(this._operator, `/${id}/addtimespent`, payload);
    }

    async roles(id:number, query?: Query["roles"]) {
        return await this._transporter.get(this._operator, `/${id}/roles`, {
            params: query
        });
    }
}