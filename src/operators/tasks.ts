import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITasks, TasksPayload } from '../tasks';

export class Tasks implements ITasks {
    public _transporter: Transporter;

    constructor(transporter: Transporter) {
        this._transporter = transporter;
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get("tasks", "/", {
            params: options
        });
    }

    async listOne(id?:number) {
        return await this._transporter.get("tasks", `/${id}`);
    }
    
    async create(payload:any) {

    }

    async delete(id:number) {

    }

    async update(id:number, payload:any) {

    }

    async addTimeSpent(id:number, payload: TasksPayload["addTimeSpent"]) {

    }

    async roles(id:number) {

    }
}