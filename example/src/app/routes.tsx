import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { AppUrl } from '../lib/app-url';
import { LoginPage } from '../pages/login';
import { LogoutPage } from '../pages/logout';
import { RegisterPage } from '../pages/register';
import { ResetPasswordPage } from '../pages/reset-password';
import { ResultPage } from '../pages/result';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={AppUrl.login.path} component={LoginPage} />
                <Route path={AppUrl.register.path} component={RegisterPage} />
                <Route path={AppUrl.logout.path} component={LogoutPage} />
                <Route path={AppUrl.result.path} component={ResultPage} />
                <Route path={AppUrl.resetPassword.path} component={ResetPasswordPage} />
                <Redirect to={AppUrl.login.path} />
            </Switch>
        </BrowserRouter>
    );
};
