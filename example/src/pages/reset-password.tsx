import React from 'react';
import { Layout } from '../lib/layout';

import { BarongResetPasswordForm } from '../react-barong';

export const ResetPasswordPage: React.FC = () => {
    return (
        <Layout>
            <h2>Reset Password</h2>
            <BarongResetPasswordForm
                host="http://localhost:3000/api/v2"
                redirection="/result?t=BarongResetPasswordForm"
                testMode={true}
                tokenParameterName="token"
            />
        </Layout>
    );
};
