import React from 'react';
import './index.scss';
import { BaseRedirectProps } from '../interfaces';
interface Props extends BaseRedirectProps {
    forgotPasswordUrl?: string;
    confirmationEmailSentText?: string;
}
export declare const BarongLoginForm: React.FC<Props>;
export {};
