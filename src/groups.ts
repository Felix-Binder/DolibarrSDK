import { DolibarrRequestOptions } from './types';

export interface IGroups {
    /**
     * List Groups
     * @param query Request query parameter
    **/
    listMany(query?:DolibarrRequestOptions):Promise<any>;

    /**
     * Get properties of an group object 
     * @param id ID of group
    **/
    listOne(id: number):Promise<any>;
}