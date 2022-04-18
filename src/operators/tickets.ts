import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITickets, TicketPayload } from '../tickets';
import { Operator } from '../operator';

export class Tickets extends Operator implements ITickets {
    constructor(transporter: Transporter) {
        super(transporter, "tickets")
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: options
        });
    }
    
    async listOne(id:number) {
        return await this._transporter.get(this._operator, `/${id}`);
    }

    async create(payload: TicketPayload["create"]) {
        return await this._transporter.post(this._operator, "/", payload);
    }

    async update(id:number, payload:Record<string, any>) {
        return await this._transporter.put(this._operator, `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete(this._operator, `/${id}`);
    }

    async newMessage(payload: TicketPayload["newMessage"]) {
        return await this._transporter.post(this._operator, "/newmessage", payload);
    }
}
