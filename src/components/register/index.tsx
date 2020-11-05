import React, { useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { BarongApiUtil, EMAIL_REGEX, PASSWORD_REGEX, RegisterBody } from '../../utils';
import { InputError } from '../form-error';
import { BaseRedirectProps } from '../interfaces';
import { BarongLayout } from '../layout';

export const BarongRegisterForm: React.FC<BaseRedirectProps> = ({ host, redirection, testMode }) => {
    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = useCallback(
        (data: RegisterBody) => {
            if (testMode === true) {
                window.location.replace(redirection);
            } else {
                BarongApiUtil.register(host, data)
                    .then((response) => {
                        response.status === 201
                            ? window.location.replace(`${redirection}`)
                            : window.console.error(response);
                    })
                    .catch((error) => {
                        window.console.log(error.response);
                    });
            }
        },
        [host, redirection, testMode]
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
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        ref={
                            register({
                                required: { value: true, message: 'Required' },
                                pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                                validate: (value) => value === watch('password') || 'Passwords do not match.',
                            }) as any
                        }
                    />
                    <InputError name="confirmPassword" errors={errors} />
                </Form.Group>
                <Button type="submit" block={true}>
                    Create Account
                </Button>
            </form>
        </BarongLayout>
    );
};
