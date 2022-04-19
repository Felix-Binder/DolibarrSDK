import { IOperator } from './types';

export type Payload = {
    create: {
        subject?: string,
        message?: string,
        origin_email?: string,
        progress?: number,
        type_code?: "COM" | "HELP" | "ISSUE" | "REQUEST" | "OTHER",
        severity_code?: "LOW" | "NORMAL" | "HIGH" | "BLOCKING",
        category_code?: "OTHER",
        // type_label: "Commercial question" | "Request for functionnal help" | "Issue or bug"  | "Change or enhancement request" | "Other",
        // severity_label: "Low" | "Normal" | "High" | "Critical / blocking",
        // category_label: "Other",
    },
    newMessage: {
        track_id: string,
        message: string,
    }
}

export interface ITickets extends IOperator<Payload["create"], Payload["create"]> {
    /**
     * Create a ticket object 
     * @param payload Request body payload
    **/
    newMessage(payload: Payload["newMessage"]):Promise<any>

    /**
     * Get properties of a Ticket object from ref 
     * @param {string} ref Reference for ticket
    **/
    ref(ref: string):Promise<any>

    /**
     * Get properties of a Ticket object from track id 
     * @param {string} track_id Tracking ID of ticket
    **/
    trackId(track_id: string):Promise<any>
}