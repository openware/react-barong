import React from 'react';
import { Layout } from '../lib/layout';

import { withBarong, BarongLoginForm } from '../react-barong';

const Login = withBarong(BarongLoginForm, {
    type: 'login',
    host: 'http://localhost:3000/api/v2',
    redirection: 'http://localhost:3000/office',
});

export const LoginPage: React.FC = () => {
    return (
        <Layout>
            <h2>Login</h2>
            <Login />
        </Layout>
    );
};
