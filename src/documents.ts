import { TypeMap } from "./types";

export type DocumentsPayload = {
    list: {
        id?: number,
        ref?: string,
        modulepart: string,
        sortfield?: "fullname" | "relativename" | "name" | "date" | "size",
        sortorder?: "asc" | "desc",
    },
    delete: TypeMap,
    builddoc: TypeMap,
    download: TypeMap,
    upload: TypeMap,
}

export interface IDocuments {
    list(payload: DocumentsPayload["list"]):Promise<any>;
    delete(payload: DocumentsPayload["delete"]):Promise<any>;
    builddoc(payload: DocumentsPayload["builddoc"]):Promise<any>;
    download(payload: DocumentsPayload["download"]):Promise<any>;
    upload(payload: DocumentsPayload["upload"]):Promise<any>;
}