import React from 'react';
import { Layout } from '../lib/layout';

import { BarongForgotPasswordForm } from '../react-barong';

export const ForgotPasswordPage: React.FC = () => {
    return (
        <Layout>
            <h2>Forgot Password</h2>
            <BarongForgotPasswordForm
                host="http://localhost:3000/api/v2"
                testMode={true}
            />
        </Layout>
    );
};
