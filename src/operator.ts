import { Transporter } from './transporter';
import { DolibarrOperator } from './types';

export abstract class Operator {
    protected _transporter: Transporter;
    protected _operator: DolibarrOperator;

    constructor(transporter: Transporter, operator: DolibarrOperator) {
        this._transporter = transporter;
        this._operator = operator
    }
}
