import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { LoginForm, RegisterForm } from 'react-barong';

export default class ExampleApp extends Component {
  render () {
  const host = process.env.REACT_APP_HOST_NAME || 'localhost:3000';
  return (
      <Tabs fill justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="SignIn">
          <LoginForm host={host}/>
        </Tab>
        <Tab eventKey="create-account" title="SignUp">
          <RegisterForm host={host}/>
        </Tab>
      </Tabs>
    )
  }
}
