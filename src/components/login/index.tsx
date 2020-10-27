import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

import './index.scss';

import { ApiUtil, EMAIL_REGEX, LoginBody, PASSWORD_REGEX } from '../../utils';
import { BarongLayout } from '../layout';
import { InputError } from '../form-error';

interface Props {
    redirection: string;
    host: string;
}

export const BarongLoginForm: React.FC<Props> = ({ host, redirection }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = useCallback(
        (data: LoginBody) => {
            ApiUtil.login(host, data)
                .then((response) => {
                    if (response.status === 200) {
                        window.location.replace(redirection);
                    } else {
                        window.console.log(response);
                    }
                })
                .catch((err) => {
                    window.console.error(err);
                });
        },
        [host, redirection]
    );

    return (
        <BarongLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Email"
                        ref={
                            register({
                                required: { value: true, message: 'Required' },
                                pattern: { value: EMAIL_REGEX, message: 'Incorrect Email' },
                            }) as any
                        }
                    />
                    <InputError name="email" errors={errors} />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={
                            register({
                                required: { value: true, message: 'Required' },
                                pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                            }) as any
                        }
                    />
                    <InputError name="password" errors={errors} />
                </Form.Group>
                <Button type="submit" block={true}>
                    Login
                </Button>
                <div className="login-options text-center mt-3">
                    <div className="login-forgot">Forgot Password?</div>
                </div>
            </form>
        </BarongLayout>
    );
};
