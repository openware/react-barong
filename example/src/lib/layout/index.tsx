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
                <a className="layout__header-link" href={AppUrl.login.path}>Login</a>
                <a className="layout__header-link" href={AppUrl.register.path}>Register</a>
            </div>
            <div className="layout__children">{children}</div>
        </div>
    );
};
