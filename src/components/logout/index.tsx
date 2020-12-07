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
    const onSubmit = useCallback(() => {
        if (testMode === true) {
            window.location.replace(redirection);
        } else {
            BarongApiUtil.logout(host)
                .then((response) => {
                    if (response.status === 200) {
                        window.location.replace(redirection);
                    } else {
                        window.console.error(response);
                    }
                })
                .catch((err) => {
                    window.console.error(err);
                });
        }
    }, [host, redirection, testMode]);

    return render ? render({ onClick: onSubmit }) : <Button onClick={onSubmit}>{text}</Button>;
};
