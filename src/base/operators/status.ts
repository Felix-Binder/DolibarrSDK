import { Transporter } from '../../transporter';
import { IStatus } from '../../status';
import { Operator } from '../../operator';

export class Status extends Operator implements IStatus {
    constructor(transporter: Transporter) {
        super(transporter, "status")
    }

    async list() {
        return await this._transporter.get(this._operator, "/");
    }
}