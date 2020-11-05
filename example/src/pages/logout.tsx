import React, { useCallback } from 'react';
import { Layout } from '../lib/layout';

import { BarongLogoutButton, LogoutButtonProps } from '../react-barong';

export const LogoutPage: React.FC = () => {
    const renderLogout = useCallback(({ onClick }: LogoutButtonProps) => {
        return <u onClick={onClick}>Log Out</u>;
    }, []);

    return (
        <Layout>
            <h2>Log Out: Button</h2>
            <BarongLogoutButton host="http://localhost:3000/api/v2" redirection="/result?t=LogOut" testMode={true} />
            <h2>Log Out: Custom</h2>
            <BarongLogoutButton
                host="http://localhost:3000/api/v2"
                redirection="/result?t=LogOut"
                render={renderLogout}
                testMode={true}
            />
        </Layout>
    );
};
