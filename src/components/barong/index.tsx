import axios from 'axios';
import React from 'react';

interface RequestDataInterface {
    email: string;
    password: string;
}

interface WithBarongProps {
    type: string;
    host: string;
    redirection: string;
}

export const withBarong = (WrappedComponent: any, wrapperProps: WithBarongProps): React.ComponentClass => {
    class WithBarong extends React.Component<WithBarongProps> {
        public render() {
            const props = {
                login: wrapperProps.type === 'login' ? this.login : undefined,
                register: wrapperProps.type === 'register' ? this.register : undefined,
                redirection: wrapperProps.redirection,
            };

            return <WrappedComponent {...props} />;
        }

        private login = async (obj: RequestDataInterface) => {
            const res = axios.post(`${wrapperProps.host}/identity/sessions`, {
                email: obj.email,
                password: obj.password,
            });

            return res;
        };

        private register = async (obj: RequestDataInterface) => {
            const res = axios.post(`${wrapperProps.host}/identity/users`, {
                email: obj.email,
                password: obj.password,
            });

            return res;
        };
    }

    return WithBarong;
};
