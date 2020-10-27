import React from 'react';
interface WithBarongProps {
    type: string;
    host: string;
    redirection: string;
}
export declare const withBarong: (WrappedComponent: any, wrapperProps: WithBarongProps) => React.ComponentClass<{}, any>;
export {};
