export type DolibarrConfig = {
    server: string,
    uri?: string,
    token: string | null,
    transporter?: any,
    authentication?: {
        username: string,
        password: string
    }
};

export type DolibarrOperator = "agendaevents" | "bankaccounts" | "contacts" | "contracts" | "documents" | "invoices" | "login" | "projects" | "proposals" | "setup" | "status" | "supplierinvoices" | "supplierorders" | "tasks" | "thirdparties" | "tickets" | "users";

export type DolibarrRequestOptions = {
    socid?: string,
    sortfield?: string,
    sortorder?: "ASC" | "DESC",
    limit?: number,
    page?: string,
    sqlfilters?: string
}

export interface IOperator<C, U> {
    listMany(options?:DolibarrRequestOptions):Promise<any>;
    listOne(id: number):Promise<any>;
    create(payload: C):Promise<any>;
    update(id: number, payload: U):Promise<any>;
    delete(id: number):Promise<any>;
}

export type TypeMap = {
    [key:string]: string|number;
}