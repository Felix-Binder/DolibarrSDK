import { Transporter } from '../../transporter';
import { ISetup, Query } from '../../setup';
import { Operator } from '../../operator';
import { DolibarrRequestOptions } from '../../types';

export class Setup extends Operator implements ISetup {
    constructor(transporter: Transporter) {
        super(transporter, "setup")
    }

    async company() {
        return await this._transporter.get(this._operator, "/company");
    }

    async modules() {
        return await this._transporter.get(this._operator, "/modules");
    }

    async config(constantname: string) {
        return await this._transporter.get(this._operator, `/conf/${constantname}`)
    }

    async checkintegrity(query: Query["checkintegrity"]) {
        return await this._transporter.get(this._operator, "/checkintegrity", {
            params: query
        });
    }

    async extrafields(query: DolibarrRequestOptions) {
        return await this._transporter.get(this._operator, "/extrafields", {
            params: query
        });
    }
}