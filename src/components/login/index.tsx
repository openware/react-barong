import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

import './index.scss';

import { BarongApiUtil, EMAIL_REGEX, LoginBody, PASSWORD_REGEX } from '../../utils';
import { BarongLayout } from '../layout';
import { InputError } from '../form-error';
import { BaseRedirectProps } from '../interfaces';

interface Props extends BaseRedirectProps {
    forgotPasswordUrl?: string;
    confirmationEmailSentText?: string;
}

export const BarongLoginForm: React.FC<Props> = ({
    host,
    redirection,
    testMode,
    forgotPasswordUrl,
    confirmationEmailSentText = 'Your email is not verified. We sent you confirmation link.',
}) => {
    const { register, handleSubmit, errors } = useForm();
    const [confirmEmail, setConfirmEmail] = useState(false);

    const handleSuccess = useCallback(
        ({ email }: LoginBody, responceData: any) => {
            let user: { level?: number } = {};
            if (responceData) {
                user = JSON.parse(responceData);
            }

            if (user.level === 0) {
                if (testMode !== true) {
                    BarongApiUtil.generateEmailToken(host, { email });
                }
                setConfirmEmail(true);
            } else {
                window.location.replace(redirection);
            }
        },
        [host, redirection, testMode]
    );

    const onSubmit = useCallback(
        (data: LoginBody) => {
            if (testMode === true) {
                handleSuccess(data, JSON.stringify({ level: 0 }));
            } else {
                BarongApiUtil.login(host, data, (responceData) => handleSuccess(data, responceData));
            }
        },
        [host, redirection, testMode]
    );

    return (
        <BarongLayout>
            {confirmEmail ? (
                <div className="email-confirmation-text">{confirmationEmailSentText}</div>
            ) : (
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
            )}
        </BarongLayout>
    );
};
