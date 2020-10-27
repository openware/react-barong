import { AxiosPromise } from 'axios';
import * as React from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../helpers';

import './index.scss';

interface LoginState {
    email: string;
    password: string;
    emailValid: boolean;
    passwordValid: boolean;
    formValid: boolean;
}

interface BarongProps {
    login: ({ email, password }) => AxiosPromise;
    redirection: string;
}

export class BarongLoginForm extends React.Component<BarongProps, LoginState> {
    constructor(props: BarongProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
        };
    }

    public render() {
        return (
            <div className="container login-form">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group login-userinput">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-user"></span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => this.onChange(e.target.value, 'email')}
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-lock"></span>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => this.onChange(e.target.value, 'password')}
                                />
                            </div>
                            <button
                                className="btn btn-primary btn-block login-button"
                                type="submit"
                                disabled={!this.state.formValid}>
                                <i className="fa fa-sign-in" /> Login
                            </button>
                            <div className="login-options text-center mt-3">
                                <div className="login-forgot">Forgot Password?</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    private onChange = (value: string, key: string) => {
        if (key === 'email') {
            value.match(EMAIL_REGEX) ? this.setState({ emailValid: true }) : this.setState({ emailValid: false });
        } else if (key === 'password') {
            value.match(PASSWORD_REGEX)
                ? this.setState({ passwordValid: true })
                : this.setState({ passwordValid: false });
        }
        //@ts-ignore
        const extendState: { [key: string]: string } = {};
        extendState[key] = value;

        this.setState(extendState as any, this.validateForm);
    };

    private validateForm = () => {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
        });
    };

    private handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        this.props
            .login({ email, password })
            .then((response) => {
                response.status === 200
                    ? window.location.replace(`${this.props.redirection}`)
                    : window.console.log(response);
            })
            .catch((err) => {
                window.console.error(err);
            });
    };
}
