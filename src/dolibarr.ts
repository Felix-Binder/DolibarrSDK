import type { DolibarrConfig } from './types';
import { Transporter } from './transporter';
import { 
    Agendaevents,
    Status,
    Tasks,
    Tickets,
    Users,
    Groups,
    Supplierorders
} from './operators';
import { IAgendaevents } from './agendaevents';
import { ISupplierorders } from './supplierorders';
import { ITasks } from './tasks';
import { ITickets } from './tickets';
import { IStatus } from './status';
import { IUsers } from './users';
import { IGroups } from './groups';

export class Dolibarr {
    public config: DolibarrConfig;
    private _transporter: Transporter;

    // Operator
    private _agendaevents: IAgendaevents;
    private _bankaccounts: any;
    private _contacts: any;
    private _contracts: any;
    private _documents: any;
    private _invoices: any;
    private _login: any;
    private _projects: any;
    private _proposals: any;
    private _setup: any;
    private _status: IStatus;
    private _supplierinvoices: any;
    private _supplierorders: ISupplierorders;
    private _tasks: ITasks;
    private _thirdparties: any;
    private _tickets: ITickets;
    private _users: IUsers;
    private _groups: IGroups;

    constructor(config:DolibarrConfig) {
        this.config = config;

        if (this.config.transporter instanceof Transporter) {
            this._transporter = this.config.transporter;
        } else {
            this._transporter = new Transporter({
                url: `${this.config.server}${this.config.uri||"/api/index.php/"}`,
                token: this.config.token
            });
        }

        this._agendaevents = new Agendaevents(this._transporter);
        this._supplierorders = new Supplierorders(this._transporter);
        this._tasks = new Tasks(this._transporter);
        this._thirdparties = {};
        this._tickets = new Tickets(this._transporter);
        this._status = new Status(this._transporter);
        this._users = new Users(this._transporter);
        this._groups = new Groups(this._transporter);
    }
	get url() {
		return `${this.config.server}${this.config.uri||"/api/index.php/"}`;
	}

    // Operators

    get agendaevents(): IAgendaevents {
        return this._agendaevents;
    }

    get supplierorders(): ISupplierorders {
        return this._supplierorders;
    }

    get tasks(): ITasks {
        return this._tasks;
    }
    
    get thirdparties(): any {
        return this._thirdparties;
    }
    
    get tickets(): ITickets {
        return this._tickets;
    }

    get status(): IStatus {
        return this._status;
    }

    get users(): IUsers {
        return this._users;
    }

    get groups(): IGroups {
        return this._groups;
    }
}