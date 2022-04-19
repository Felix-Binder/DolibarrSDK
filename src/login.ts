export type LoginOptions = {
    username: string,
    password: string,
    entity?: string, // Entity (when multicompany module is used). '' means 1=first company. ,
    reset?: number //Reset token (0=get current token, 1=ask a new token and canceled old token. This means access using current existing API token of user will fails: new token will be required for new access)
}

export interface ILogin {
    /**
     * Login with GET Method (not recommanded)
     * @param query Request query parameter
    **/
    get(query: LoginOptions):Promise<any>;

    
    /**
     * Login with POST Method (recommanded)
     * @param payload Request body payload
    **/
    post(payload: LoginOptions):Promise<any>;
}