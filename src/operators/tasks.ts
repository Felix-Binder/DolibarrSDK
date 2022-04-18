import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITasks, TasksPayload } from '../tasks';
import { Operator } from '../operator';

export class Tasks extends Operator implements ITasks {
    constructor(transporter: Transporter) {
        super(transporter, "tasks")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }

    async listOne(id: number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }
    
    async create(payload: TasksPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: TasksPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }
    
    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async addTimeSpent(id:number, payload: TasksPayload["addTimeSpent"]) {
        return await this._transporter.post(this._operator, `/${id}/addtimespent`, payload);
    }

    async roles(id:number) {
        return await this._transporter.get(this._operator, `/${id}/roles`);
    }
}