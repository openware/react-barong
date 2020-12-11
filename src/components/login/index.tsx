import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

import './index.scss';

import { BarongApiUtil, EMAIL_REGEX, LoginBody, PASSWORD_REGEX } from '../../utils';
import { BarongLayout } from '../layout';
import { InputError } from '../form-error';
import { BaseRedirectProps } from '../interfaces';

interface Props extends BaseRedirectProps {
    forgotPasswordUrl?: string;
}

export const BarongLoginForm: React.FC<Props> = ({ host, redirection, testMode, forgotPasswordUrl }) => {
    const { register, handleSubmit, errors } = useForm();

    const handleSuccess = useCallback(() => {
        window.location.replace(redirection);
    }, [redirection]);

    const onSubmit = useCallback(
        (data: LoginBody) => {
            if (testMode === true) {
                handleSuccess();
            } else {
                BarongApiUtil.login(host, data, handleSuccess);
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
                    <Button type="submit" block={true}>
                        Login
                    </Button>
                </Form.Group>
                {forgotPasswordUrl ? (
                    <Form.Group>
                        <div className="login-form__forgot">
                            <a href={forgotPasswordUrl}>Forgot Password?</a>
                        </div>
                    </Form.Group>
                ) : null}
            </form>
        </BarongLayout>
    );
};
