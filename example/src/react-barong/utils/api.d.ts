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
export interface ForgotPasswordBody {
    email: string;
    captcha_response?: string;
}
export declare const BarongApiUtil: {
    login: (host: string, data: LoginBody, onSuccess: (data?: any) => void, onError?: ((error: string) => void) | undefined) => void;
    logout: (host: string, onSuccess: (data?: any) => void, onError?: ((error: string) => void) | undefined) => void;
    register: (host: string, data: RegisterBody, onSuccess: (data?: any) => void, onError?: ((error: string) => void) | undefined) => void;
    resetPassword: (host: string, data: ResetPasswordBody, onSuccess: (data?: any) => void, onError?: ((error: string) => void) | undefined) => void;
    forgotPassword: (host: string, data: ForgotPasswordBody, onSuccess: (data?: any) => void, onError?: ((error: string) => void) | undefined) => void;
};
