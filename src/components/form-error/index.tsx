import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FieldErrors } from 'react-hook-form';

import './index.scss';

interface Props {
    name: string;
    errors: FieldErrors<{ message: string }>;
}

export const InputError: React.FC<Props> = ({ name, errors }) => {
    const [text, setText] = useState<string>();

    useEffect(() => {
        if (errors) {
            const error = errors[name];
            if (error) {
                setText(error.message);
            }
        }
    }, [errors]);

    return text ? <Form.Text>{text}</Form.Text> : null;
};
