import { DolibarrRequestOptions } from './types';

export interface IGroups {
    listMany(options?:DolibarrRequestOptions):Promise<any>;
    listOne(id: number):Promise<any>;
}