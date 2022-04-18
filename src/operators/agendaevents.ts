import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { IAgendaevents, AgendaeventsPayload } from '../agendaevents';
import { Operator } from '../operator';

export class Agendaevents extends Operator implements IAgendaevents {
    constructor(transporter: Transporter) {
        super(transporter, "agendaevents")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id: number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: AgendaeventsPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id: number, payload: AgendaeventsPayload["update"]) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id: number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }
}
