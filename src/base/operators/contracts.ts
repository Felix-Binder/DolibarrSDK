import { Transporter } from '../../transporter';
import { DolibarrRequestOptions } from '../../types';
import { IContracts, Payload } from '../../contracts';
import { Operator } from '../../operator';

export class Contracts extends Operator implements IContracts {
    constructor(transporter: Transporter) {
        super(transporter, "contracts")
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

    async update(id:number, payload: Payload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }
    
    // Additional

    async close(id: number, payload: Payload["close"]) {
        return await this._transporter.post(this._operator, `/contracts/${id}/close`, payload);
    }

    async getLines(id: number) {
        return await this._transporter.get(this._operator, `/contracts/${id}/lines`);
    }

    async addLine(id: number, payload: Payload["addLine"]) {
        return await this._transporter.post(this._operator, `/contracts/${id}/lines`, payload);
    }

    async delLine(id: number, line: number) {
        return await this._transporter.delete(this._operator, `/contracts/${id}/lines/${line}`);
    }

    async putLine(id: number, line: number, payload: Payload["putLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${id}/lines/${line}`, payload);
    }

    async activateLine(id: number, line: number, payload: Payload["activateLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${id}/lines/${line}/activate`, payload);
    }

    async unactivateLine(id: number, line: number, payload: Payload["unactivateLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${id}/lines/${line}/unactivate`, payload);
    }

    async validate(id: number, payload: Payload["validate"]) {
        return await this._transporter.post(this._operator, `/contracts/${id}/validate`, payload);
    }
}
