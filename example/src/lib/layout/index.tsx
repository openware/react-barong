import React from 'react';

import './index.scss';

import { AppUrl } from '../app-url';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout__header">
                <a className="layout__header-link" href={AppUrl.login.path}>
                    Login
                </a>
                <a className="layout__header-link" href={AppUrl.register.path}>
                    Register
                </a>
                <a className="layout__header-link" href={AppUrl.logout.path}>
                    Log out
                </a>
                <a className="layout__header-link" href={AppUrl.resetPassword.url({ token: '123456' })}>
                    Reset Passowrd
                </a>
                <a className="layout__header-link" href={AppUrl.forgotPassword.path}>
                    Forgot Passowrd
                </a>
                <a className="layout__header-link" href={AppUrl.confirmationEmail.url({ token: '123456' })}>
                    Confirmation Email
                </a>
            </div>
            <div className="layout__children">
                <div className="layout__children-content">{children}</div>
            </div>
        </div>
    );
};
