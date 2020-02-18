import * as React from "react";
import { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="container login-form">
        <h2 className="login-title">- Please Login -</h2>
        <div className="panel panel-default">
          <div className="panel-body">
            <form>
              <div className="input-group login-userinput">
                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                <input id="txtUser" type="text" className="form-control" name="username" placeholder="Username" />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                <input  id="txtPassword" type="password" className="form-control" name="password" placeholder="Password" />
                <span id="showPassword" className="input-group-btn">
                  <button className="btn btn-default reveal" type="button"><i className="glyphicon glyphicon-eye-open"></i></button>
                </span>
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
