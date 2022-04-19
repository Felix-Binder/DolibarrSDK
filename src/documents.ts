export type Payload = {
    builddoc: {
        modulepart: string,
        original_file?: string,
        doctemplat?: string,
        langcode?: string,
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

export type Query = {
    delete: {
        modulepart: string,
        original_file: string
    },
    list: {
        id?: number,
        ref?: string,
        modulepart: string,
        sortfield?: "fullname" | "relativename" | "name" | "date" | "size",
        sortorder?: "asc" | "desc",
    },
    download: {
        modulepart: string,
        original_file?: string
    },
}

export interface IDocuments {
    /**
     * Delete a document
     * @param query Request query parameter
    **/
    delete(query: Query["delete"]):Promise<any>;
    
    /**
     * Return the list of documents of a dedicated element (from its ID or Ref)
     * @param query Request query parameter
    **/
    list(query: Query["list"]):Promise<any>;

    /**
     * Build a document
     * @param payload Request body payload
    **/
    builddoc(payload: Payload["builddoc"]):Promise<any>;

    /**
     * Download a document
     * @param query Request query parameter
    **/
    download(query: Query["download"]):Promise<any>;

    /**
     * Upload a file
     * @param payload Request body payload
    **/
    upload(payload: Payload["upload"]):Promise<any>;
}