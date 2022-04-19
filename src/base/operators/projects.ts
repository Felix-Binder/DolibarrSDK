import { Transporter } from '../../transporter';
import { DolibarrRequestOptions } from '../../types';
import { IProjects, Payload, Query } from '../../projects';
import { Operator } from '../../operator';

export class Projects extends Operator implements IProjects {
    constructor(transporter: Transporter) {
        super(transporter, "projects")
    }

    async listMany(query?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: query
        });
    }
    
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: Payload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id:number, payload: Payload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    // Additional

    async roles(id: number, query?: Query["roles"]) {
        return await this._transporter.get(this._operator, `/${id}/roles`, {
            params: query
        });
    }

    async tasks(id: number, query?: Query["tasks"]) {
        return await this._transporter.get(this._operator, `/${id}/tasks`, {
            params: query
        });
    }

    async validate(id: number, payload: Payload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
}
