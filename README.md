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

[![NPM](https://img.shields.io/npm/v/react-barong.svg)](https://www.npmjs.com/package/react-barong) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Barong React Authentication components for [barong](https://github.com/openware/barong)

## Installation

If you want to add package to your project run:

```bash
npm install --save react-barong
```

## Glossary

-   [BarongLoginForm](#BarongLoginForm)
-   [BarongRegisterForm](#BarongRegisterForm)
-   [BarongLogoutButton](#BarongLogoutButton)
-   [BarongResetPasswordForm](#BarongResetPasswordForm)
-   [Demo](#Demo)
-   [Local development](#Local-development)
-   [License](#License)

### BarongLoginForm

Login form

| Name                | Type      | Required | Description                                                                 |
| ------------------- | --------- | -------- | --------------------------------------------------------------------------- |
| `redirection`       | `string`  | Yes      | Redirection URL after successful submit.                                    |
| `host`              | `string`  | Yes      | Barong host string. Example: `https://foo-exchange.com/api/v2`.             |
| `testMode`          | `boolean` | No       | If test mode is `true`, the submit is fired without calling the barong API. |
| `forgotPasswordUrl` | `string`  | No       | If set, the forgot password lint will be appeared.                          |

### BarongRegisterForm

Register form

| Name          | Type      | Required | Description                                                                 |
| ------------- | --------- | -------- | --------------------------------------------------------------------------- |
| `redirection` | `string`  | Yes      | Redirection URL after successful submit.                                    |
| `host`        | `string`  | Yes      | Barong host string. Example: `https://foo-exchange.com/api/v2`.             |
| `testMode`    | `boolean` | No       | If test mode is `true`, the submit is fired without calling the barong API. |

### BarongLogoutButton

Log out button

| Name          | Type                                                 | Required | Description                                                                 |
| ------------- | ---------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| `redirection` | `string`                                             | Yes      | Redirection URL after successful submit.                                    |
| `host`        | `string`                                             | Yes      | Barong host string. Example: `https://foo-exchange.com/api/v2`.             |
| `testMode`    | `boolean`                                            | No       | If test mode is `true`, the submit is fired without calling the barong API. |
| `render`      | `(options: LogoutButtonProps) => React.ReactElement` | No       | Renders custom button                                                       |
| `text`        | `string`                                             | No       | Buttons string content. Default value: `Log Out`                            |

### BarongResetPasswordForm

Reset password form

| Name                 | Type      | Required | Description                                                                  |
| -------------------- | --------- | -------- | ---------------------------------------------------------------------------- |
| `redirection`        | `string`  | Yes      | Redirection URL after successful submit.                                     |
| `host`               | `string`  | Yes      | Barong host string. Example: `https://foo-exchange.com/api/v2`.              |
| `testMode`           | `boolean` | No       | If test mode is `true`, the submit is fired without calling the barong API.  |
| `tokenParameterName` | `string`  | No       | Name of the query parameter for token. Default value: `reset_password_token` |

## Demo

If you want to see demo of this application:

1. Clone repositroy
2. Run

```bash
npm install
npm build
```

3. Go to _./example_ directory and start development server:

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
