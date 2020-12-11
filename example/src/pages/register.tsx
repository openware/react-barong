import React from 'react';
import { Layout } from '../lib/layout';

import { BarongRegisterForm } from '../react-barong';

export const RegisterPage: React.FC = () => {
    return (
        <Layout>
            <h2>Register</h2>
            <BarongRegisterForm host="http://localhost:3000/api/v2" redirection="/result?t=Register" testMode={true} />
        </Layout>
    );
};
