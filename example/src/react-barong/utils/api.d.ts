import { AxiosResponse } from 'axios';
export interface LoginBody {
    email: string;
    password: string;
}
export interface RegisterBody {
    email: string;
    password: string;
}
declare function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse<any>>;
export declare const ApiUtil: {
    post: typeof post;
    login: (host: string, data: LoginBody) => Promise<AxiosResponse<any>>;
    register: (host: string, data: RegisterBody) => Promise<AxiosResponse<any>>;
};
export {};
