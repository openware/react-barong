import * as React from 'react'
import { withBarong } from 'react-barong';
import { PASSWORD_REGEX, EMAIL_REGEX } from '../../helpers';

class LoginForm extends React.Component {
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

    onChange = (value: string, key: string) => {
        if (key === 'email') {
          value.match(EMAIL_REGEX) ? this.setState({emailValid: true}) : this.setState({emailValid: false});
        } else if (key === 'password') {
          value.match(PASSWORD_REGEX) ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
        }

        this.setState({
            [key]: value,
        }, this.validateForm);
    }

    validateForm = () => {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
        });
    }

    render() {
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

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        window.console.log('here');
        this.props.login({ email, password });
    };
}

export default withBarong(LoginForm, { type: 'login', host: 'https://dev.yellow.openware.work/api/v2/barong' });
