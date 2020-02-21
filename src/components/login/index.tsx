import * as React from "react";
import { Component } from "react";
import axios from 'axios';
import { PASSWORD_REGEX, EMAIL_REGEX } from '../../helpers';

interface LoginState {
  email: string,
  password: string,
  emailValid: boolean,
  passwordValid: boolean,
  formValid: boolean,
}

export class LoginForm extends Component<LoginState> {
  public state = {
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  onChange = (value: string, key: string) => {
    // @ts-ignore
    switch(key) {
      case 'email':
        value.match(EMAIL_REGEX) ? this.setState({emailValid: true}) : this.setState({emailValid: false});
        break;
      case 'password':
        value.match(PASSWORD_REGEX) ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
        break;
      default:
        break;
    }
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
    axios.post('http://localhost:3000/api/v2/identity/sessions',
      {
        email: data.email,
        password: data.password
      }
    )
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
