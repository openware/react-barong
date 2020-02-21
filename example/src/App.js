import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { LoginForm, RegisterForm } from 'react-barong'

export default class ExampleApp extends Component {
  render () {
    return (
      <Tabs fill justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="SignIn">
          <LoginForm />
        </Tab>
        <Tab eventKey="create-account" title="SignUp">
          <RegisterForm />
        </Tab>
      </Tabs>
    )
  }
}
