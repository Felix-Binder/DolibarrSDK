import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IInvoices, InvoicesPayload } from '../invoices';
import { Operator } from '../operator';

export class Invoices extends Operator implements IInvoices {
    constructor(transporter: Transporter) {
        super(transporter, "invoices")
    }

    /**
     * List invoices
    **/
    async listMany(query?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: query
        });
    }

    /**
     * Get properties of an invoice object
    **/ 
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    /**
     * Create an invoice object
    **/
    async create(payload: InvoicesPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    /**
     * Update an invoice
    **/
    async update(id:number, payload: InvoicesPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    /**
     * Delete an invoice
    **/
    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }
    
    // Aditional

    // TODO
}
