import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IProposals, Payload, Query } from '../proposals';
import { Operator } from '../operator';

export class Proposals extends Operator implements IProposals {
    constructor(transporter: Transporter) {
        super(transporter, "proposals")
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

    // Additionals

    async close(id: number, payload: Payload["close"]): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/close`, payload);
    }

    async delContact(id: number, contact: number, type: any): Promise<any> {
        return await this._transporter.delete(this._operator, `/${id}/contact/${contact}/${type}`);
    }

    async addContact(id: number, contact: number, type: any): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/contact/${contact}/${type}`);
    }

    async getLines(id: number): Promise<any> {
        return await this._transporter.get(this._operator, `/${id}/lines`);
    }

    async addLine(id: number, payload: Payload["addLines"]): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/lines`, payload);
    }

    async delLine(id: number, line: number): Promise<any> {
        return await this._transporter.delete(this._operator, `/${id}/lines/${line}`);
    }

    async putLine(id: number, line: number, payload: Payload["putLine"]): Promise<any> {
        return await this._transporter.put(this._operator, `/${id}/lines/${line}`, payload);
    }

    async setInvoiced(id: number): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/setinvoiced`);
    }

    async setDraft(id: number): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/settodraft`);
    }

    async validate(id: number, payload: Payload["validate"]): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }

    async ref_ext(ref_ext: string, query?: Query["ref"]): Promise<any> {
        return await this._transporter.get(this._operator, `/ref_ext/${ref_ext}`, {
            params: query
        });
    }

    async ref(ref: string, query?: Query["ref"]): Promise<any> {
        return await this._transporter.get(this._operator, `/ref/${ref}`, {
            params: query
        });
    }
}
