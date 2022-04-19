import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IContracts, ContractsPayload } from '../contracts';
import { Operator } from '../operator';

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

    async create(payload: ContractsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id:number, payload: ContractsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }
    
    // Aditional

    async close(contract: number, payload: ContractsPayload["close"]) {
        return await this._transporter.post(this._operator, `/contracts/${contract}/close`, payload);
    }

    async getLines(contract: number) {
        return await this._transporter.get(this._operator, `/contracts/${contract}/lines`);
    }

    async addLine(contract: number, payload: ContractsPayload["addLine"]) {
        return await this._transporter.post(this._operator, `/contracts/${contract}/lines`, payload);
    }

    async delLine(contract: number, line: number) {
        return await this._transporter.delete(this._operator, `/contracts/${contract}/lines/${line}`);
    }

    async putLine(contract: number, line: number, payload: ContractsPayload["putLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${contract}/lines/${line}`, payload);
    }

    async activateLine(contract: number, line: number, payload: ContractsPayload["activateLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${contract}/lines/${line}/activate`, payload);
    }

    async unactivateLine(contract: number, line: number, payload: ContractsPayload["unactivateLine"]) {
        return await this._transporter.put(this._operator, `/contracts/${contract}/lines/${line}/unactivate`, payload);
    }

    async validate(contract: number, payload: ContractsPayload["validate"]) {
        return await this._transporter.post(this._operator, `/contracts/${contract}/validate`, payload);
    }
}
