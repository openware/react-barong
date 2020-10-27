import { AxiosPromise } from 'axios';
import * as React from 'react';
import './index.scss';
interface LoginState {
    email: string;
    password: string;
    emailValid: boolean;
    passwordValid: boolean;
    formValid: boolean;
}
interface BarongProps {
    login: ({ email, password }: {
        email: any;
        password: any;
    }) => AxiosPromise;
    redirection: string;
}
export declare class BarongLoginForm extends React.Component<BarongProps, LoginState> {
    constructor(props: BarongProps);
    render(): JSX.Element;
    private onChange;
    private validateForm;
    private handleSubmit;
}
export {};
