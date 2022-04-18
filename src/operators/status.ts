import { Transporter } from '../transporter';
import { IStatus } from '../status';

export class Status implements IStatus {
    private _transporter: Transporter;

    constructor(transporter: Transporter) {
        this._transporter = transporter;
    }

    async list() {
        return await this._transporter.get("status", "/");
    }
}