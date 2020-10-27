import React from 'react';
import { Layout } from '../lib/layout';

import { BarongLoginForm } from '../react-barong';

export const LoginPage: React.FC = () => {
    return (
        <Layout>
            <h2>Login</h2>
            <BarongLoginForm host="http://localhost:3000/api/v2" redirection="http://localhost:3000/office" />
        </Layout>
    );
};
