export type DocumentsPayload = {
    list: {
        id?: number,
        ref?: string,
        modulepart: string,
        sortfield?: "fullname" | "relativename" | "name" | "date" | "size",
        sortorder?: "asc" | "desc",
    },
    delete: {
        modulepart: string,
        original_file: string
    },
    builddoc: {
        modulepart: string,
        original_file?: string,
        doctemplat?: string,
        langcode?: string,
    },
    download: {
        modulepart: string,
        original_file?: string
    },
    upload: {
        filename: string,
        modulepart: string,
        ref?: string,
        subdir?: string,
        filecontent?: string,
        fileencoding?: 'base64',
        overwriteifexists?: number,
        createdirifnotexists?: number
    },
}

export interface IDocuments {
    list(query: DocumentsPayload["list"]):Promise<any>;
    delete(payload: DocumentsPayload["delete"]):Promise<any>;
    builddoc(payload: DocumentsPayload["builddoc"]):Promise<any>;
    download(payload: DocumentsPayload["download"]):Promise<any>;
    upload(payload: DocumentsPayload["upload"]):Promise<any>;
}