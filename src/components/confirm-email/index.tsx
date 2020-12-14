import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { parseUrl } from 'query-string';

import { BarongApiUtil } from '../../utils';
import { BaseRedirectProps } from '../interfaces';
import { BarongLayout } from '../layout';

export interface BarongConfirmEmailFormProps extends Omit<BaseRedirectProps, 'redirection'> {
    tokenParameterName?: string;
    successContent?: React.ReactNode;
    pendingContent?: React.ReactNode;
    errorContent?: React.ReactNode;
}

type ApiResult = 'success' | 'error';

export const ConfirmEmailForm: React.FC<BarongConfirmEmailFormProps> = ({
    host,
    testMode,
    tokenParameterName = 'token',
    pendingContent = 'Pending confirmation...',
    successContent = 'Your email is confirmed.',
    errorContent = 'Confirmation error.',
}) => {
    const token = useMemo(() => {
        const params = parseUrl(`${window.location}`).query as { [key: string]: string | undefined };
        return params[tokenParameterName] || '';
    }, [tokenParameterName]);

    const [result, setResult] = useState<ApiResult>();

    const handleSuccess = useCallback(() => {
        setResult('success');
    }, []);

    const handleError = useCallback(() => {
        setResult('error');
    }, []);

    useEffect((): any => {
        if (testMode === true) {
            const timer = setTimeout(() => {
                handleSuccess();
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            BarongApiUtil.confirmEmail(host, { token }, handleSuccess, handleError);
            return null;
        }
    }, [testMode]);

    const content = useMemo(() => {
        if (result === 'error') {
            return errorContent;
        } else if (result === 'success') {
            return successContent;
        } else {
            return pendingContent;
        }
    }, [result, errorContent, pendingContent, successContent]);

    return <BarongLayout>{content}</BarongLayout>;
};
