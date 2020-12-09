import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { BarongApiUtil, EMAIL_REGEX, ForgotPasswordBody } from '../../utils';
import { InputError } from '../form-error';
import { BaseRedirectProps } from '../interfaces';
import { BarongLayout } from '../layout';

export interface BarongForgotPasswordProps extends Omit<BaseRedirectProps, 'redirection'> {
    delay?: number;
}

export const BarongForgotPasswordForm: React.FC<BarongForgotPasswordProps> = ({ host, testMode, delay = 60 }) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [disable, setDisable] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    const handleSuccess = useCallback(() => {
        setDisable(true);
    }, []);

    const onSubmit = useCallback(
        (data: ForgotPasswordBody) => {
            if (testMode === true) {
                handleSuccess();
            } else {
                BarongApiUtil.forgotPassword(host, data, handleSuccess);
            }
        },
        [host, testMode]
    );

    useEffect(() => {
        if (disable) {
            setTimeLeft(delay);
        }
    }, [disable, delay]);

    useEffect((): any => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            setDisable(false);
            return null;
        }
    }, [timeLeft]);

    return (
        <BarongLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        ref={
                            register({
                                required: { value: true, message: 'Required' },
                                pattern: { value: EMAIL_REGEX, message: 'Incorrect Email' },
                            }) as any
                        }
                    />
                    <InputError name="email" errors={errors} />
                </Form.Group>
                <Button type="submit" block={true} disabled={disable}>
                    {disable ? `Resend in ${timeLeft}s` : 'Send'}
                </Button>
            </form>
        </BarongLayout>
    );
};
