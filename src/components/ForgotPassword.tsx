import React, { Component } from "react";

export default class ForgotPassword extends Component {
  render() {
      return (
          <form>
              <h3>Forgot Password</h3>

              <div className="form-group">
                  <label>Enter email to reset password</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
              </div>

              <button type="submit" className="btn btn-primary btn-block">Send</button>
              <p className="forgot-password text-center">
                Back to<a href="/sign-in" className="h2"> SignIn</a>
              </p>
          </form>
      );
  }
}