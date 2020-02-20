import * as React from "react";
import { Component } from "react";
import axios from 'axios';

interface LoginState {
  email: string,
  password: string,
}

export class LoginForm extends Component<LoginState> {
  public state = {
    email: '',
    password: '',
  };

  onChange = (value: string, key: string) => {
    // @ts-ignore
    this.setState({
        [key]: value,
    });
  }

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
        email: this.state.email,
        password: this.state.password,
    };
    console.log(data.email, data.password);
    const response = axios.post('http://localhost:3000/api/v2/identity/sessions',
        { email: data.email,
          password: data.password}
        )
    console.log(response);
  }

  render() {
    return (
      <div className="container login-form">
        <h2 className="login-title">- Please Login -</h2>
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
              <button className="btn btn-primary btn-block login-button" type="submit"><i className="fa fa-sign-in"></i> Login</button>
              <div className="login-options">
                <a href="#" className="login-forgot">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
