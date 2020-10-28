import axios, { AxiosResponse } from 'axios';

export interface LoginBody {
    email: string;
    password: string;
}

export interface RegisterBody {
    email: string;
    password: string;
}

function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse> {
    return axios.post(`${host}/${subpath}`, body);
}

export const ApiUtil = {
    post,
    login: (host: string, data: LoginBody): Promise<AxiosResponse> => {
        return post(host, 'identity/sessions', data);
    },
    register: (host: string, data: RegisterBody): Promise<AxiosResponse> => {
        return post(host, 'identity/users', data);
    },
};
