import React from 'react';
import { BaseRedirectProps } from '../interfaces';
export interface BarongForgotPasswordProps extends Omit<BaseRedirectProps, 'redirection'> {
    delay?: number;
}
export declare const BarongForgotPasswordForm: React.FC<BarongForgotPasswordProps>;
