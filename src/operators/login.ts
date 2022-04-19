import { Transporter } from '../transporter';
import { ILogin, LoginOptions } from '../login';
import { Operator } from '../operator';

export class Login extends Operator implements ILogin {
    constructor(transporter: Transporter) {
        super(transporter, "login")
    }

    async get(query: LoginOptions) {
        return await this._transporter.get(this._operator, "/", {
            params: query
        });
    }

    async post(payload: LoginOptions) {
        return await this._transporter.post(this._operator, "/", payload);
    }
}