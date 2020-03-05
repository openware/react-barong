import * as React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import {withBarong, LoginForm, RegisterForm } from "react-barong";

const Register = withBarong(RegisterForm, { type: 'register', host: 'https://dev.yellow.openware.work/api/v2/barong' });
const Login = withBarong(LoginForm, { type: 'login', host: 'https://dev.yellow.openware.work/api/v2/barong' });
export default class ExampleApp extends React.Component {
    render () {
        return (
            <Tabs fill justify defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="SignIn">
                    <Login />
                </Tab>
                <Tab eventKey="create-account" title="SignUp">
                    <Register />
                </Tab>
            </Tabs>
        );
    }
}
