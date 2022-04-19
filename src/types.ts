export type DolibarrConfig = {
    server: string,
    token: string | null,
    uri?: string,
    url?: string,
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
    /**
     * Get a List of objects
     * @param query Request query parameter
    **/
    listMany(query?: DolibarrRequestOptions):Promise<any>;
    
    /**
     * Get properties of an object
     * @param id Id of object to list
    **/
    listOne(id: number):Promise<any>;

    /**
     * Create an object
     * @param payload Request body payload
    **/
    create(payload: C):Promise<any>;

    /**
     * Update an object
     * @param id Id of object to update
     * @param payload Request body payload
    **/
    update(id: number, payload: U):Promise<any>;

    /**
     * Delete an object
     * @param id Id of object to delete
    **/
    delete(id: number):Promise<any>;
}

export type TypeMap = {
    [key:string]: string | number;
}