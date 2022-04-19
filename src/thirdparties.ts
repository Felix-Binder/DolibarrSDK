import { IOperator, TypeMap } from './types';

export type Payload = {
    create: TypeMap,
    update: TypeMap
}

export interface IThirdparties extends IOperator<Payload["create"], Payload["update"]> {}