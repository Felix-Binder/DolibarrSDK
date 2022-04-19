import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IUsers, Payload } from '../users';
import { Operator } from '../operator';

export class Users extends Operator implements IUsers {
    constructor(transporter: Transporter) {
        super(transporter, "users")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: Payload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: Payload["create"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async groups(id: number) {
        return await this._transporter.get(this._operator, `/${id}/groups`);
    }

    async setGroup(id: number, group: number) {
        return await this._transporter.get(this._operator, `/${id}/setGroup/${group}`);
    }

    async findEmail(email: string) {
        return await this._transporter.get(this._operator, `/email/${email}`);
    }

    async info() {
        return await this._transporter.get(this._operator, `/info`);
    }

    async login(login: any) {
        return await this._transporter.get(this._operator, `/login/${login}`);
    }
}
