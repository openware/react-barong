import React from 'react';
import { FieldErrors } from 'react-hook-form';
import './index.scss';
interface Props {
    name: string;
    errors: FieldErrors<{
        message: string;
    }>;
}
export declare const InputError: React.FC<Props>;
export {};
