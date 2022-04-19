import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IProjects, ProjectsPayload } from '../projects';
import { Operator } from '../operator';

export class Projects extends Operator implements IProjects {
    constructor(transporter: Transporter) {
        super(transporter, "projects")
    }

    /**
     * List projects
    **/
    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    /**
     * Get properties of a project object
    **/
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    /**
     * Create a project object
    **/
    async create(payload: ProjectsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    /**
     * Update a project general fields (won't tocuh lines of project)
    **/
    async update(id:number, payload: ProjectsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    /**
     * Delete a project
    **/
    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    /**
     * Get roles a user is assigned to a project with
    **/
    async roles(id: number, query: ProjectsPayload["roles"]) {
        return await this._transporter.get(this._operator, `/${id}/roles`, {
            params: query
        });
    }

    /**
     * Get tasks of a project
    **/
    async tasks(id: number, query: ProjectsPayload["tasks"]) {
        return await this._transporter.get(this._operator, `/${id}/tasks`, {
            params: query
        });
    }

    /**
     * Validate a project
    **/
    async validate(id: number, payload: ProjectsPayload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
}
