export interface LoginBody {
    email: string;
    password: string;
}

export interface RegisterBody {
    email: string;
    password: string;
}

interface BaseFetchOptions {
    path: string;
    rootUrl?: string;
    body?: any;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

function baseFetch(options: BaseFetchOptions): Promise<Response> {
    const { rootUrl, path, method, body } = options;
    const endpoint = `${(rootUrl || '').replace(/^\//, '')}/${path}`;
    const headers: { [key: string]: string } = {};
    headers['Content-Type'] = 'application/json';

    return fetch(endpoint, {
        method: method,
        mode: 'cors',
        body,
        headers: {
            ...headers,
        },
    });
}

async function post<TBody>(host: string, subpath: string, body: TBody): Promise<any> {
    return baseFetch({ method: 'POST', rootUrl: host, path: subpath, body });
}

export const BarongApiUtil = {
    post,
    login: async (host: string, data: LoginBody): Promise<any> => {
        return post(host, 'identity/sessions', data);
    },
    logout: async (host: string): Promise<any> => {
        return baseFetch({ method: 'DELETE', rootUrl: host, path: 'identity/sessions' });
    },
    register: async (host: string, data: RegisterBody): Promise<any> => {
        return post(host, 'identity/users', data);
    },
};
