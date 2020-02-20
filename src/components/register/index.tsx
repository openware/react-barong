import * as React from "react";
import { Component } from "react";

export class RegisterForm extends Component {
  render() {
    return (
      <div className="container login-form">
        <h2 className="login-title"> Create new account </h2>
        <div className="panel panel-default">
          <div className="panel-body">
            <form>
              <div className="input-group login-userinput">
                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                <input id="userEmail" type="text" className="form-control" name="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                <input  id="txtPassword" type="password" className="form-control" name="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                <input  id="confirmTxtPassword" type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
              </div>
              <button className="btn btn-primary btn-block login-button" type="submit"><i className="fa fa-sign-in"></i> Create Account </button>
              <div className="login-options">
                Already have an account? <a href="#" className="login-forgot">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
