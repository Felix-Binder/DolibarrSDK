import { Transporter } from '../../transporter';
import { IGroups } from '../../groups';
import { DolibarrRequestOptions } from '../../types';
import { Operator } from '../../operator';

export class Groups extends Operator implements IGroups {
    constructor(transporter: Transporter) {
        super(transporter, "users")
    }

    async listMany(options?: DolibarrRequestOptions): Promise<any> {
        return await this._transporter.get(this._operator, "/groups", {
            params: options
        });
    }

    async listOne(id: number): Promise<any> {
        return await this._transporter.get(this._operator, `/groups/${id}`);
    }
}