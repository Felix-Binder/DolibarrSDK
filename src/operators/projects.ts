import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IProjects, ProjectsPayload } from '../projects';
import { Operator } from '../operator';

export class Projects extends Operator implements IProjects {
    constructor(transporter: Transporter) {
        super(transporter, "tickets")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: ProjectsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id:number, payload: ProjectsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async roles(id: number, query: ProjectsPayload["roles"]) {
        return await this._transporter.get(this._operator, `/${id}/roles`, {
            params: query
        });
    }

    async tasks(id: number, query: ProjectsPayload["tasks"]) {
        return await this._transporter.get(this._operator, `/${id}/tasks`, {
            params: query
        });
    }

    async validate(id: number, payload: ProjectsPayload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
}
