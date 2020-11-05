import React from 'react';
import { Layout } from '../lib/layout';

import { BarongLoginForm } from '../react-barong';

export const LoginPage: React.FC = () => {
    return (
        <Layout>
            <h2>Login</h2>
            <BarongLoginForm
                host="http://localhost:3000/api/v2"
                redirection="/result?t=Login"
                forgotPasswordUrl="http://localhost:3000/forgotpassword"
                testMode={true}
            />
        </Layout>
    );
};
