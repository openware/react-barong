import React, { Component } from "react";
import axios from 'axios';

interface MyState {
    email: string,
    password: string,
}

export default class Login extends Component<MyState> {
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

        const response = axios.post('http://localhost:3000/api/v2/identity/sessions',
            { email: data.email,
              password: data.password}
            )
        console.log(response);
    }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>

              <div className="form-group">
                  <label>Email address</label>
                  <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={e => this.onChange(e.target.value, 'email')} />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={e => this.onChange(e.target.value, 'password')} />
              </div>

              <div className="form-group">
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                  </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Submit</button>
              <p className="forgot-password text-center">
                <a href="/forgot-password" className="h2"> Forgot password?</a>
              </p>
          </form>
      );
  }
}