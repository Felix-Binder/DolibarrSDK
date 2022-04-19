import { Transporter } from '../../transporter';
import { DolibarrRequestOptions } from '../../types';
import { IInvoices, Payload } from '../../invoices';
import { Operator } from '../../operator';

export class Invoices extends Operator implements IInvoices {
    constructor(transporter: Transporter) {
        super(transporter, "invoices")
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
    
    // Aditional

    async delContactType(id: number, contact: number, type: string) {
        return await this._transporter.delete(this._operator, `/${id}/contact/${contact}/${type}`);
    }

    async addContactType(id: number, contact: number, type: string) {
        return await this._transporter.post(this._operator, `/${id}/contact/${contact}/${type}`);
    }

    async addContact(id: number, payload: Payload["addContact"]) {
        return await this._transporter.post(this._operator, `/${id}/contacts`, payload);
    }

    async getDiscount(id: number) {
        return await this._transporter.get(this._operator, `/${id}/discount`);
    }

    async getLines(id: number) {
        return await this._transporter.get(this._operator, `/${id}/lines`);
    }

    async addLine(id: number, payload: Payload["addLine"]): Promise<any> {
        return await this._transporter.post(this._operator, `/${id}/lines`, payload);
    }

    async delLine(id: number, line: number) {
        return await this._transporter.delete(this._operator, `/${id}/lines/${line}`);
    }

    async putLine(id: number, line: number, payload: Payload["putLine"]) {
        return await this._transporter.put(this._operator, `/${id}/lines/${line}`, payload);
    }

    async markAsCreditAvailable(id: number) {
        return await this._transporter.post(this._operator, `/${id}/markAsCreditAvailable`);
    }

    async getPayments(id: number) {
        return await this._transporter.get(this._operator, `/${id}/payments`);
    }

    async addPayment(id: number, payload: Payload["addPayment"]) {
        return await this._transporter.post(this._operator, `/${id}/payments`, payload);
    }

    async setDraft(id: number, payload: Payload["setDraft"]) {
        return await this._transporter.post(this._operator, `/${id}/settodraft`, payload);
    }

    async setPaid(id: number, payload: Payload["setPaid"]) {
        return await this._transporter.post(this._operator, `/${id}/settopaid`, payload);
    }

    async setUnpaid(id: number) {
        return await this._transporter.post(this._operator, `/${id}/settounpaid`);
    }

    async usecreditnote(id: number, discount: number) {
        return await this._transporter.post(this._operator, `/${id}/usecreditnote/${discount}`);
    }

    async usediscount(id: number, discount: number) {
        return await this._transporter.post(this._operator, `/${id}/usediscount/${discount}`);
    }
    
    async validate(id: number, payload: Payload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
    
    async createfromorder(order: number) {
        return await this._transporter.post(this._operator, `/createfromorder/${order}`);
    }
    
    async putPayment(id: number, payload: Payload["addPayment"]) {
        return await this._transporter.put(this._operator, `/payments/${id}`, payload);
    }
    
    async paymentsdistributed(payload: Payload["paymentsdistributed"]) {
        return await this._transporter.post(this._operator, `/paymentsdistributed`, payload);
    }

    async ref_ext(ref_ext: string): Promise<any> {
        return await this._transporter.get(this._operator, `/ref_ext/${ref_ext}`);
    }

    async ref(ref: string): Promise<any> {
        return await this._transporter.get(this._operator, `/ref/${ref}`);
    }
}