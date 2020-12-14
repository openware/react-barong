import axios, { AxiosResponse } from 'axios';

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

export interface GenerateTokenBody {
    email: string;
    captcha_response?: string;
}

export interface ConfirmEmailBody {
    token: string;
}

// function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse> {
//     return axios.post(`${host}/${subpath}`, body);
// }

function handleApiCall(
    result: Promise<AxiosResponse>,
    onSuccess?: (data?: any) => void,
    onError?: (error: string) => void
) {
    result
        .then((response) => {
            if (response.status === 201) {
                if (onSuccess) {
                    onSuccess(response.data);
                }
            } else {
                if (onError) {
                    onError(`API error: ${response.statusText}`);
                }
                window.console.error(response);
            }
        })
        .catch((error) => {
            if (onError) {
                onError(`API error: ${error.response}`);
            }
            window.console.log(error.response);
        });
}

export const BarongApiUtil = {
    login: (host: string, data: LoginBody, onSuccess: (data?: any) => void, onError?: (error: string) => void) => {
        return handleApiCall(axios.post(`${host}identity/sessions`, data), onSuccess, onError);
    },
    logout: (host: string, onSuccess: (data?: any) => void, onError?: (error: string) => void) => {
        return handleApiCall(axios.delete(`${host}/identity/sessions`), onSuccess, onError);
    },
    register: (
        host: string,
        data: RegisterBody,
        onSuccess: (data?: any) => void,
        onError?: (error: string) => void
    ) => {
        return handleApiCall(axios.post(`${host}/identity/users`, data), onSuccess, onError);
    },
    resetPassword: (
        host: string,
        data: ResetPasswordBody,
        onSuccess: (data?: any) => void,
        onError?: (error: string) => void
    ) => {
        return handleApiCall(axios.put(`${host}/identity/users/password/confirm_code`, data), onSuccess, onError);
    },
    forgotPassword: (
        host: string,
        data: GenerateTokenBody,
        onSuccess: (data?: any) => void,
        onError?: (error: string) => void
    ) => {
        return handleApiCall(axios.post(`${host}/identity/users/password/generate_code`, data), onSuccess, onError);
    },
    generateEmailToken: (
        host: string,
        data: GenerateTokenBody,
        onSuccess?: (data?: any) => void,
        onError?: (error: string) => void
    ) => {
        return handleApiCall(axios.post(`${host}/identity/users/email/generate_code`, data), onSuccess, onError);
    },
    confirmEmail: (
        host: string,
        data: ConfirmEmailBody,
        onSuccess?: (data?: any) => void,
        onError?: (error: string) => void
    ) => {
        return handleApiCall(axios.post(`${host}/identity/users/email/confirm_code`, data), onSuccess, onError);
    },
};
