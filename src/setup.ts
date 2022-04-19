import { DolibarrRequestOptions } from "./types"

export type Query = {
    checkintegrity: {
        target: string
    }
}

export interface ISetup {
    /**
     * Get properties of company 
    **/
    company():Promise<any>

    /**
     * Get list of enabled modules
    **/
    modules():Promise<any>

    /**
     * Get value of a setup variables
     * @param {string} constantname Name of conf variable to get
    **/
    config(constantname: string):Promise<any>

    /**
     * Do a test of integrity for files and setup
     * @param query Request query parameter
    **/
    checkintegrity(query: Query["checkintegrity"]):Promise<any>

    /**
     * Get the list of extra fields
     * @param query Request query parameter
    **/
    extrafields(query?: DolibarrRequestOptions):Promise<any>
}