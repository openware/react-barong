import React from 'react';
import { Layout } from '../lib/layout';

import { withBarong, BarongRegisterForm } from '../react-barong';

const Register = withBarong(BarongRegisterForm, {
    type: 'register',
    host: 'http://localhost:3000/api/v2',
    redirection: 'http://localhost:3000/office',
});

export const RegisterPage: React.FC = () => {
    return (
        <Layout>
            <h2>Register</h2>
            <Register />
        </Layout>
    );
};
