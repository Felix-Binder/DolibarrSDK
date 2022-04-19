import { IOperator, TypeMap } from './types';

export type ContractsPayload = {
    create: TypeMap,
    update: TypeMap,
    close: TypeMap,
    addLine: TypeMap,
    putLine: TypeMap,
    activateLine: TypeMap,
    unactivateLine: TypeMap,
    validate: TypeMap
}

export interface IContracts extends IOperator<ContractsPayload["create"], ContractsPayload["update"]> {
    close(contract: number, payload: ContractsPayload["close"]):Promise<any>;
    getLines(contract: number):Promise<any>;
    addLine(contract: number, payload: ContractsPayload["addLine"]):Promise<any>;
    delLine(contract: number, line: number):Promise<any>;
    putLine(contract: number, line: number, payload: ContractsPayload["putLine"]):Promise<any>;
    activateLine(contract: number, line: number, payload: ContractsPayload["activateLine"]):Promise<any>;
    unactivateLine(contact: number, line: number, payload: ContractsPayload["unactivateLine"]):Promise<any>;
    validate(contact: number, payload: ContractsPayload["validate"]):Promise<any>;
}