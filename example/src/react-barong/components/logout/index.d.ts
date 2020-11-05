import React from 'react';
import { BaseRedirectProps } from '../interfaces';
export interface LogoutButtonProps {
    onClick: () => void;
}
interface Props extends BaseRedirectProps {
    render?: (props: LogoutButtonProps) => React.ReactElement;
    text?: string;
}
export declare const BarongLogoutButton: React.FC<Props>;
export {};
