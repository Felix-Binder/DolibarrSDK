import { Transporter } from '../transporter';
import { 
    Agendaevents,
    Bankaccounts,
    Contacts,
    Contracts,
    Documents,
    Groups,
    Invoices,
    Projects,
    Proposals,
    Supplierinvoices,
    Supplierorders,
    Tasks,
    Thirdparties,
    Tickets,
    Users,
} from '../operators';
import { IAgendaevents } from '../agendaevents';
import { IBankaccounts } from '../bankaccounts';
import { IContacts } from '../contacts';
import { IContracts } from '../contracts';
import { IDocuments } from '../documents';
import { IGroups } from '../groups';
import { IInvoices } from '../invoices';
import { IProjects } from '../projects';
import { IProposals } from '../proposals';
import { ISupplierinvoices } from '../supplierinvoices';
import { ISupplierorders } from '../supplierorders';
import { ITasks } from '../tasks';
import { IThirdparties } from '../thirdparties';
import { ITickets } from '../tickets';
import { IUsers } from '../users';

export class DolibarrItems {
    private _transporter: Transporter;

    // Operator
    private _agendaevents: IAgendaevents;
    private _bankaccounts: IBankaccounts;
    private _contacts: IContacts;
    private _contracts: IContracts;
    private _documents: IDocuments;
    private _groups: IGroups;
    private _invoices: IInvoices;
    private _projects: IProjects;
    private _proposals: IProposals;
    private _supplierinvoices: ISupplierinvoices;
    private _supplierorders: ISupplierorders;
    private _tasks: ITasks;
    private _thirdparties: IThirdparties;
    private _tickets: ITickets;
    private _users: IUsers;


    constructor(transporter: Transporter) {
        this._transporter = transporter;

        this._agendaevents = new Agendaevents(this._transporter);
        this._bankaccounts = new Bankaccounts(this._transporter);
        this._contacts = new Contacts(this._transporter);
        this._contracts = new Contracts(this._transporter);
        this._documents = new Documents(this._transporter);
        this._groups = new Groups(this._transporter);
        this._invoices = new Invoices(this._transporter);
        this._projects = new Projects(this._transporter);
        this._proposals = new Proposals(this._transporter);
        this._supplierinvoices = new Supplierinvoices(this._transporter);
        this._supplierorders = new Supplierorders(this._transporter);
        this._tasks = new Tasks(this._transporter);
        this._thirdparties = new Thirdparties(this._transporter);
        this._tickets = new Tickets(this._transporter);
        this._users = new Users(this._transporter);
    }

    get agendaevents(): IAgendaevents {
        return this._agendaevents;
    }

    get bankaccounts(): IBankaccounts {
        return this._bankaccounts;
    }

    get contacts(): IContacts{
        return this._contacts;
    }

    get contracts(): IContracts {
        return this._contracts;
    }

    get documents(): IDocuments {
        return this._documents;
    }

    get groups(): IGroups {
        return this._groups;
    }

    get invoices(): IInvoices {
        return this._invoices;
    }

    get projects(): IProjects {
        return this._projects;
    }
    
    get proposals(): IProposals {
        return this._proposals;
    }

    get supplierinvoices(): ISupplierinvoices {
        return this._supplierinvoices;
    }

    get supplierorders(): ISupplierorders {
        return this._supplierorders;
    }

    get tasks(): ITasks {
        return this._tasks;
    }
    
    get thirdparties(): IThirdparties {
        return this._thirdparties;
    }
    
    get tickets(): ITickets {
        return this._tickets;
    }

    get users(): IUsers {
        return this._users;
    }
}