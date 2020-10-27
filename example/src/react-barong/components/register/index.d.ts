import { AxiosPromise } from 'axios';
import * as React from 'react';
interface RegisterState {
    email: string;
    password: string;
    confirmPassword: string;
    emailValid: boolean;
    passwordValid: boolean;
    confirmPasswordValid: boolean;
    formValid: boolean;
}
interface BarongProps {
    register: ({ email, password }: {
        email: any;
        password: any;
    }) => AxiosPromise;
    redirection: string;
}
export declare class BarongRegisterForm extends React.Component<BarongProps, RegisterState> {
    constructor(props: BarongProps);
    render(): JSX.Element;
    private onChange;
    private validateForm;
    private handleSubmit;
}
export {};
