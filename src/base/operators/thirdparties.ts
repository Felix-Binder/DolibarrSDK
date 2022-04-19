import { Transporter } from '../../transporter';
import { DolibarrRequestOptions } from '../../types';
import { IThirdparties, Payload } from '../../thirdparties';
import { Operator } from '../../operator';

export class Thirdparties extends Operator implements IThirdparties {
    constructor(transporter: Transporter) {
        super(transporter, "thirdparties")
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

    async update(id:number, payload:Record<string, any>) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    // Additionals
}
