import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITickets, Payload } from '../tickets';
import { Operator } from '../operator';

export class Tickets extends Operator implements ITickets {
    constructor(transporter: Transporter) {
        super(transporter, "tickets")
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

    async newMessage(payload: Payload["newMessage"]) {
        return await this._transporter.post(this._operator, "/newmessage", payload);
    }

    async ref(ref: string) {
        return await this._transporter.get(this._operator, `/ref/${ref}`);
    }

    async trackId(track_id: string) {
        return await this._transporter.get(this._operator, `/track_id/${track_id}`);
    }
}
