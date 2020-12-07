import React, { useCallback, useMemo } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { parseUrl } from 'query-string';

import { BarongApiUtil, PASSWORD_REGEX, ResetPasswordBody } from '../../utils';
import { InputError } from '../form-error';
import { BaseRedirectProps } from '../interfaces';
import { BarongLayout } from '../layout';

export interface BarongResetPasswordFormProps extends BaseRedirectProps {
    tokenParameterName?: string;
}

export const BarongResetPasswordForm: React.FC<BarongResetPasswordFormProps> = ({
    host,
    redirection,
    testMode,
    tokenParameterName = 'reset_password_token',
}) => {
    const { register, handleSubmit, errors, watch } = useForm();

    const token = useMemo(() => {
        const params = parseUrl(`${window.location}`).query as { [key: string]: string | undefined };
        return params[tokenParameterName] || '';
    }, [tokenParameterName]);

    const onSubmit = useCallback(
        (data: ResetPasswordBody) => {
            data.reset_password_token = token;
            if (testMode === true) {
                window.location.replace(redirection);
            } else {
                BarongApiUtil.resetPassword(host, data)
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
        [host, redirection, testMode, token]
    );

    return (
        <BarongLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        name="confirm_password"
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
                    Reset
                </Button>
            </form>
        </BarongLayout>
    );
};
