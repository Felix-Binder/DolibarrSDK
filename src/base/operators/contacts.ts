import { Transporter } from '../../transporter';
import { DolibarrRequestOptions } from '../../types';
import { IContacts, Payload, Query } from '../../contacts';
import { Operator } from '../../operator';

export class Contacts extends Operator implements IContacts {
    constructor(transporter: Transporter) {
        super(transporter, "contacts")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
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

    // Additional

    async getCategories(id: number, query?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, `/contacts/${id}/categories`, {
            params: query
        });
    }

    async delCategory(id: number, category: number) {
        return await this._transporter.delete(this._operator, `/contacts/${id}/categories/${category}`);
    }

    async addCategory(id: number, category: number) {
        return await this._transporter.post(this._operator, `/contacts/${id}/categories/${category}`);
    }

    async createUser(id: number, payload: Payload["createUser"]) {
        return await this._transporter.post(this._operator, `/contacts/${id}/createUser`, payload);
    }

    async findEmail(email: string, query?: Query["findEmail"]) {
        return await this._transporter.get(this._operator, `/contacts/email/${email}`, {
            params: query
        });
    }
}
