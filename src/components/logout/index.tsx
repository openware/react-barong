import React, { useCallback } from 'react';

import { Button } from 'react-bootstrap';

import { BarongApiUtil } from '../../utils';
import { BaseRedirectProps } from '../interfaces';

export interface LogoutButtonProps {
    onClick: () => void;
}

interface Props extends BaseRedirectProps {
    render?: (props: LogoutButtonProps) => React.ReactElement;
    text?: string;
}

export const BarongLogoutButton: React.FC<Props> = ({ host, redirection, render, text = 'Log Out', testMode }) => {
    const handleSuccess = useCallback(() => {
        window.location.replace(redirection);
    }, [redirection]);

    const onSubmit = useCallback(() => {
        if (testMode === true) {
            handleSuccess();
        } else {
            BarongApiUtil.logout(host, handleSuccess);
        }
    }, [host, redirection, testMode]);

    return render ? render({ onClick: onSubmit }) : <Button onClick={onSubmit}>{text}</Button>;
};
