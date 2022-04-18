import { Transporter } from '../transporter';
import { DolibarrRequestOptions } from '../types';
import { ITickets, TicketPayload } from '../tickets';

export class Tickets implements ITickets {
    private _transporter: Transporter;

    constructor(transporter: Transporter) {
        this._transporter = transporter;
    }

    async listMany(options?: DolibarrRequestOptions) {
        return await this._transporter.get("tickets", "/", {
            params: options
        });
    }
    
    async listOne(id:number) {
        return await this._transporter.get("tickets", `/${id}`);
    }

    async create(payload: TicketPayload["create"]) {
        return await this._transporter.post("tickets", "/", payload);
    }

    async update(id:number, payload:Record<string, any>) {
        return await this._transporter.put("tickets", `/${id}`, payload);
    }

    async delete(id:number) {
        return await this._transporter.delete("tickets", `/${id}`);
    }

    async newMessage(payload: TicketPayload["newMessage"]) {
        return await this._transporter.post("tickets", "/newmessage", payload);
    }
}
