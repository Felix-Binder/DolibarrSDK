import { Transporter } from '../transporter';
import { 
    // Dictionary,
    Login,
    Setup,
    Status,
} from '../operators';
// import { IDictionary } from '../dictionary';
import { ILogin } from '../login';
import { ISetup } from '../setup';
import { IStatus } from '../status';

export class DolibarrSystem {
    private _transporter: Transporter;

    // private _dictionary: IDictionary;
    private _login: ILogin;
    private _setup: ISetup;
    private _status: IStatus;

    constructor(transporter: Transporter) {
        this._transporter = transporter;

        // this._dictionary = new Dictionary(this._transporter);
        this._login = new Login(this._transporter);
        this._setup = new Setup(this._transporter);
        this._status = new Status(this._transporter);
    }

    get login(): ILogin {
        return this._login;
    }

    get setup(): ISetup {
        return this._setup;
    }

    // get dictionary(): IDictionary {
    //     return this._dictionary;
    // }

    get status(): IStatus {
        return this._status;
    }
}