import { Transporter } from '../transporter';
import { IDocuments, DocumentsPayload } from '../documents';
import { Operator } from '../operator';

export class Documents extends Operator implements IDocuments {
    constructor(transporter: Transporter) {
        super(transporter, "documents")
    }

    async delete(query: DocumentsPayload["delete"]) {
        return await this._transporter.delete(this._operator, "/", {}, {
            params: query
        })
    }

    async list(query: DocumentsPayload["list"]) {
        return await this._transporter.get(this._operator, "/", {
            params: query
        })
    }

    async builddoc(payload: DocumentsPayload["builddoc"]) {
        return await this._transporter.put(this._operator, "/builddoc", payload)
    }

    async download(query: DocumentsPayload["download"]) {
        return await this._transporter.get(this._operator, "/download", {
            params: query
        }) 
    }

    async upload(payload: DocumentsPayload["upload"]) {
        return await this._transporter.post(this._operator, "/upload", payload)
    }
}
