![Cryptocurrency Exchange Platform - OpenDAX](https://github.com/openware/meta/raw/main/images/github_opendax.png)

<h3 align="center">
<a href="https://www.openware.com/sdk">Guide</a> <span>&vert;</span>
<a href="https://www.openware.com/sdk/api.html">API Docs</a> <span>&vert;</span>
<a href="https://www.openware.com/">Consulting</a> <span>&vert;</span>
<a href="https://t.me/peatio">Community</a>
</h3>
<h6 align="center">Barong is part of <a href="https://github.com/openware/opendax">OpenDAX Trading Platform</a></h6>

---

# react-barong

> Barong React SignUp and SignIn component library

[![NPM](https://img.shields.io/npm/v/react-barong.svg)](https://www.npmjs.com/package/react-barong) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install


If you want to add package to your project run:
```bash
npm install --save react-barong
```

## Usage

```tsx
import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { withBarong, BarongLoginForm, BarongRegisterForm } from 'react-barong';

const Register = withBarong(BarongRegisterForm, {
    type: 'register',
    host: 'http://localhost:3000/api/v2', //localhost can be changed for address of barong application
    redirection: 'http://localhost:3000/office', //address to which user should be redirected after successful registration
});

const Login = withBarong(BarongLoginForm, {
    type: 'login',
    host: 'http://localhost:3000/api/v2', //localhost can be changed for address of barong application
    redirection: 'http://localhost:3000/office', //address to which user should be redirected after successful sign in
});

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
```

## Demo

If you want to see demo of this application:

1. Clone repositroy
2. Run
```bash
npm install
npm build
```
3. Go to *./example* directory and start development server:
```bash
npm install
npm start
```

## Local development

For local development you can change version of `react-barong` inside ./example/package.json for
```json
"react-barong": "link:.."
```
then, in root folder, run

```bash 
npm install
npm start
```

and start development server
```bash
cd ./example
npm install
npm start
```


## License

Apache 2.0 © [openware](https://github.com/openware)
