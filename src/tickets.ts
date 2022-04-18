import { IOperator } from './types';

export type TicketPayload = {
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

export interface ITickets extends IOperator<TicketPayload["create"], TicketPayload["create"]> {
    newMessage(payload: TicketPayload["newMessage"]):Promise<any>
}