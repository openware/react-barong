import * as React from "react";
import axios from 'axios';
import { PASSWORD_REGEX, EMAIL_REGEX } from '../../helpers';

interface LoginState {
  email: string,
  password: string,
  emailValid: boolean,
  passwordValid: boolean,
  formValid: boolean,
}

interface Props {
  host: string;
}

export class LoginForm extends React.Component<Props, LoginState> {
  constructor(props: any) {
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
    // @ts-ignore
    this.setState({
        [key]: value,
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    })
  }

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
        email: this.state.email,
        password: this.state.password,
    };
    axios.post(`${this.props.host}`,
      {
        email: data.email,
        password: data.password
      }
    )
    // @ts-ignore
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
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
              <button className="btn btn-primary btn-block login-button" type="submit" disabled={!this.state.formValid}><i className="fa fa-sign-in"></i> Login</button>
              <div className="login-options text-center mt-3">
                <a href="#" className="login-forgot">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
