import React from 'react';
import { Layout } from '../lib/layout';

import { ConfirmEmailForm } from '../react-barong';

export const ConfirmationEmailPage: React.FC = () => {
    return (
        <Layout>
            <h2>Confirmation Email</h2>
            <ConfirmEmailForm host="http://localhost:3000/api/v2" testMode={true} />
        </Layout>
    );
};
