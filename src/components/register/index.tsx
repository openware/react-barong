import { AxiosPromise } from 'axios';
import * as React from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../helpers';

interface RegisterState {
    email: string;
    password: string;
    confirmPassword: string;
    emailValid: boolean;
    passwordValid: boolean;
    confirmPasswordValid: boolean;
    formValid: boolean;
  }

  interface BarongProps {
    register: ({email, password}) => AxiosPromise;
    redirection: string;
}

export class BarongRegisterForm extends React.Component<BarongProps, RegisterState> {
    constructor(props: BarongProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
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
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input id="userEmail" type="text" className="form-control" name="email" placeholder="Email" onChange={e => this.onChange(e.target.value, 'email')} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input  id="txtPassword" type="password" className="form-control" name="password" placeholder="Password" onChange={e => this.onChange(e.target.value, 'password')} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input  id="confirmTxtPassword" type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={e => this.onChange(e.target.value, 'confirmPassword')} />
                    </div>
                    <button className="btn btn-primary btn-block login-button" type="submit" disabled={!this.state.formValid}><i className="fa fa-sign-in"></i> Create Account </button>
                    </form>
                </div>
                </div>
            </div>
        );
    }

    private onChange = (value: string, key: string) => {
        if (key === 'email') {
            value.match(EMAIL_REGEX) ? this.setState({emailValid: true}) : this.setState({emailValid: false});
        } else if (key === 'password') {
            value.match(PASSWORD_REGEX) ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
        } else if (key === 'confirmPassword') {
            value === this.state.password ? this.setState({confirmPasswordValid: true}) : this.setState({confirmPasswordValid: false});
        }
        //@ts-ignore
        this.setState({
            [key]: value,
        }, this.validateForm);
    };

    private validateForm = () => {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid,
        });
    };

    private handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.register({ email, password }).then(response => {
            response.status === 201 ? window.location.replace(`${this.props.redirection}`) : window.console.log(response);
        }).catch(error => {
            window.console.log(error.response);
        });
    };
}
