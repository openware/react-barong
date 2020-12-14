import React from 'react';
import { BaseRedirectProps } from '../interfaces';
export interface BarongConfirmEmailFormProps extends Omit<BaseRedirectProps, 'redirection'> {
    tokenParameterName?: string;
    successContent?: React.ReactNode;
    pendingContent?: React.ReactNode;
    errorContent?: React.ReactNode;
}
export declare const ConfirmEmailForm: React.FC<BarongConfirmEmailFormProps>;
