import { AxiosResponse } from 'axios';
export interface LoginBody {
    email: string;
    password: string;
}
export interface RegisterBody {
    email: string;
    password: string;
}
export interface ResetPasswordBody {
    reset_password_token: string;
    password: string;
    confirm_password: string;
}
declare function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse>;
export declare const BarongApiUtil: {
    post: typeof post;
    login: (host: string, data: LoginBody) => Promise<AxiosResponse>;
    logout: (host: string) => Promise<AxiosResponse>;
    register: (host: string, data: RegisterBody) => Promise<AxiosResponse>;
    resetPassword: (host: string, data: ResetPasswordBody) => Promise<AxiosResponse>;
};
export {};
