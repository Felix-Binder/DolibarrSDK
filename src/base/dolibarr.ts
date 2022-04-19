import type { DolibarrConfig } from '../types';
import { Transporter } from '../transporter';
import { DolibarrSystem } from './system';
import { DolibarrItems } from './items';

export class Dolibarr {
    public config: DolibarrConfig;
    private _transporter: Transporter;
    private _system: DolibarrSystem;
    private _items: DolibarrItems;

    constructor(config:DolibarrConfig) {
        this.config = config;

        if (!this.config.server) throw Error("Server is not defined!")
        this.config.url = `${this.config.server}${this.config.uri||"/api/index.php/"}`;

        if (this.config?.transporter && this.config.transporter instanceof Transporter) {
            this._transporter = this.config.transporter;
        } else {
            this._transporter = new Transporter({
                url: this.config.url,
                token: this.config.token
            });
        }

        this._system = new DolibarrSystem(this._transporter);
        this._items = new DolibarrItems(this._transporter);
    }

	get url() {
		return this.config.url;
	}

    get system() {
        return this._system;
    }

    get items() {
        return this._items;
    }
}