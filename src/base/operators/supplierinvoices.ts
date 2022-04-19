import { Transporter } from '../../transporter';
import { DolibarrRequestOptions, TypeMap } from '../../types';
import { ISupplierinvoices, Payload } from '../../supplierinvoices';
import { Operator } from '../../operator';

export class Supplierinvoices extends Operator implements ISupplierinvoices {
    constructor(transporter: Transporter) {
        super(transporter, "supplierinvoices")
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

    // Additionals

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

    async getPayments(id: number) {
        return await this._transporter.get(this._operator, `/${id}/payments`);
    }

    async addPayment(id: number, payload: Payload["addPayments"]) {
        return await this._transporter.post(this._operator, `/${id}/payments`, payload);
    }

    async validate(id: number, payload: Payload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
}
