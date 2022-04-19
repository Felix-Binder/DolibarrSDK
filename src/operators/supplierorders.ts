import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ISupplierorders, SupplierordersPayload } from '../supplierorders';
import { Operator } from '../operator';

export class Supplierorders extends Operator implements ISupplierorders {
    constructor(transporter: Transporter) {
        super(transporter, "supplierorders")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id: number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: SupplierordersPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: SupplierordersPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async validate(id: number, payload: SupplierordersPayload["validate"]) {
        return await this._transporter.post(this._operator, `/${id}/validate`, payload);
    }
}
