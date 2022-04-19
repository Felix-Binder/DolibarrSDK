import { Transporter } from '../transporter';
import { ILogin, LoginPayload } from '../login';
import { Operator } from '../operator';

export class Login extends Operator implements ILogin {
    constructor(transporter: Transporter) {
        super(transporter, "login")
    }

    async get(payload: LoginPayload) {
        return await this._transporter.get(this._operator, "/", {
            params: payload
        });
    }

    async post(payload: LoginPayload) {
        return await this._transporter.post(this._operator, "/", payload);
    }
}