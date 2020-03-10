import * as React from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../helpers';

interface LoginState {
    email: string;
    password: string;
    emailValid: boolean;
    passwordValid: boolean;
    formValid: boolean;
}

export class LoginForm extends React.Component<{}, LoginState> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
        };
    }

    public onChange = (value: string, key: string) => {
        if (key === 'email') {
            value.match(EMAIL_REGEX) ? this.setState({emailValid: true}) : this.setState({emailValid: false});
        } else if (key === 'password') {
            value.match(PASSWORD_REGEX) ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
        }
        //@ts-ignore
        this.setState({
            [key]: value,
        }, this.validateForm);
    };

    public validateForm = () => {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
        });
    };

    public render() {
        return (
            <div className="container login-form">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group login-userinput">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                                <input type="text" className="form-control" name="email" placeholder="Email" onChange={e => this.onChange(e.target.value, 'email')} />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" onChange={e => this.onChange(e.target.value, 'password')} />
                            </div>
                            <button
                                className="btn btn-primary btn-block login-button"
                                type="submit"
                                disabled={!this.state.formValid}
                            >
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

    public handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        //@ts-ignore
        this.props.login({ email, password }).then(response => {
            //@ts-ignore
            response.status === 200 ? window.location.href = `${this.props.redirection}` : window.console.log(response);
        }).catch(error => {
            window.console.log(error.response);
        });
    };
}
