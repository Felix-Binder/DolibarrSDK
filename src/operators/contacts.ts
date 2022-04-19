import { Transporter } from '../transporter';
import { DolibarrRequestOptions, TypeMap } from '../types';
import { IContacts, ContactsPayload } from '../contacts';
import { Operator } from '../operator';

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

    async create(payload: ContactsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: ContactsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    // Aditional

    async getCategories(contact: number, options: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, `/contacts/${contact}/categories`, {
            params: options
        });
    }

    async delCategory(contact: number, category: number) {
        return await this._transporter.delete(this._operator, `/contacts/${contact}/categories/${category}`);
    }

    async addCategory(contact: number, category: number) {
        return await this._transporter.post(this._operator, `/contacts/${contact}/categories/${category}`);
    }

    async createUser(contact: number, payload: ContactsPayload["createUser"]) {
        return await this._transporter.post(this._operator, `/contacts/${contact}/createUser`, payload);
    }

    async findEmail(email: string) {
        return await this._transporter.get(this._operator, `/contacts/email/${email}`);
    }
}
