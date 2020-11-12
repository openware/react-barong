export interface LoginBody {
    email: string;
    password: string;
}
export interface RegisterBody {
    email: string;
    password: string;
}
declare function post<TBody>(host: string, subpath: string, body: TBody): Promise<any>;
export declare const BarongApiUtil: {
    post: typeof post;
    login: (host: string, data: LoginBody) => Promise<any>;
    logout: (host: string) => Promise<any>;
    register: (host: string, data: RegisterBody) => Promise<any>;
};
export {};
