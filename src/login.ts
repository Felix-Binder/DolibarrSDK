export type LoginPayload = {
    username: string,
    password: string
}

export interface ILogin {
    get(payload: LoginPayload):Promise<any>;
    post(payload: LoginPayload):Promise<any>;
}