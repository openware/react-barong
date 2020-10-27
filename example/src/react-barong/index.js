/* tslint-disable */
import axios from 'axios';
import { createElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var withBarong = function (WrappedComponent, wrapperProps) {
    var WithBarong = /** @class */ (function (_super) {
        __extends(WithBarong, _super);
        function WithBarong() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.login = function (obj) { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    res = axios.post(wrapperProps.host + "/identity/sessions", {
                        email: obj.email,
                        password: obj.password,
                    });
                    return [2 /*return*/, res];
                });
            }); };
            _this.register = function (obj) { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    res = axios.post(wrapperProps.host + "/identity/users", {
                        email: obj.email,
                        password: obj.password,
                    });
                    return [2 /*return*/, res];
                });
            }); };
            return _this;
        }
        WithBarong.prototype.render = function () {
            var props = {
                login: wrapperProps.type === 'login' ? this.login : undefined,
                register: wrapperProps.type === 'register' ? this.register : undefined,
                redirection: wrapperProps.redirection,
            };
            return (createElement(WrappedComponent, __assign({}, props)));
        };
        return WithBarong;
    }(Component));
    return WithBarong;
};

/* eslint-disable */
var PASSWORD_REGEX = /^(?=.{8,})/;
var EMAIL_REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

var BarongLoginForm = /** @class */ (function (_super) {
    __extends(BarongLoginForm, _super);
    function BarongLoginForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value, key) {
            if (key === 'email') {
                value.match(EMAIL_REGEX) ? _this.setState({ emailValid: true }) : _this.setState({ emailValid: false });
            }
            else if (key === 'password') {
                value.match(PASSWORD_REGEX)
                    ? _this.setState({ passwordValid: true })
                    : _this.setState({ passwordValid: false });
            }
            //@ts-ignore
            var extendState = {};
            extendState[key] = value;
            _this.setState(extendState, _this.validateForm);
        };
        _this.validateForm = function () {
            _this.setState({
                formValid: _this.state.emailValid && _this.state.passwordValid,
            });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            var _a = _this.state, email = _a.email, password = _a.password;
            _this.props
                .login({ email: email, password: password })
                .then(function (response) {
                response.status === 200
                    ? window.location.replace("" + _this.props.redirection)
                    : window.console.log(response);
            })
                .catch(function (err) {
                window.console.error(err);
            });
        };
        _this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
        };
        return _this;
    }
    BarongLoginForm.prototype.render = function () {
        var _this = this;
        return (createElement("div", { className: "container login-form" },
            createElement("div", { className: "panel panel-default" },
                createElement("div", { className: "panel-body" },
                    createElement("form", { onSubmit: this.handleSubmit },
                        createElement("div", { className: "input-group login-userinput" },
                            createElement("span", { className: "input-group-addon" },
                                createElement("span", { className: "glyphicon glyphicon-user" })),
                            createElement("input", { type: "text", className: "form-control", name: "email", placeholder: "Email", onChange: function (e) { return _this.onChange(e.target.value, 'email'); } })),
                        createElement("div", { className: "input-group" },
                            createElement("span", { className: "input-group-addon" },
                                createElement("span", { className: "glyphicon glyphicon-lock" })),
                            createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password", onChange: function (e) { return _this.onChange(e.target.value, 'password'); } })),
                        createElement("button", { className: "btn btn-primary btn-block login-button", type: "submit", disabled: !this.state.formValid },
                            createElement("i", { className: "fa fa-sign-in" }),
                            " Login"),
                        createElement("div", { className: "login-options text-center mt-3" },
                            createElement("div", { className: "login-forgot" }, "Forgot Password?")))))));
    };
    return BarongLoginForm;
}(Component));

var BarongRegisterForm = /** @class */ (function (_super) {
    __extends(BarongRegisterForm, _super);
    function BarongRegisterForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value, key) {
            var _a;
            if (key === 'email') {
                value.match(EMAIL_REGEX) ? _this.setState({ emailValid: true }) : _this.setState({ emailValid: false });
            }
            else if (key === 'password') {
                value.match(PASSWORD_REGEX) ? _this.setState({ passwordValid: true }) : _this.setState({ passwordValid: false });
            }
            else if (key === 'confirmPassword') {
                value === _this.state.password ? _this.setState({ confirmPasswordValid: true }) : _this.setState({ confirmPasswordValid: false });
            }
            //@ts-ignore
            _this.setState((_a = {},
                _a[key] = value,
                _a), _this.validateForm);
        };
        _this.validateForm = function () {
            _this.setState({
                formValid: _this.state.emailValid && _this.state.passwordValid && _this.state.confirmPasswordValid,
            });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            var _a = _this.state, email = _a.email, password = _a.password;
            _this.props.register({ email: email, password: password }).then(function (response) {
                response.status === 201 ? window.location.replace("" + _this.props.redirection) : window.console.log(response);
            }).catch(function (error) {
                window.console.log(error.response);
            });
        };
        _this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false,
        };
        return _this;
    }
    BarongRegisterForm.prototype.render = function () {
        var _this = this;
        return (createElement("div", { className: "container login-form" },
            createElement("div", { className: "panel panel-default" },
                createElement("div", { className: "panel-body" },
                    createElement("form", { onSubmit: this.handleSubmit },
                        createElement("div", { className: "input-group login-userinput" },
                            createElement("span", { className: "input-group-addon" },
                                createElement("span", { className: "glyphicon glyphicon-user" })),
                            createElement("input", { id: "userEmail", type: "text", className: "form-control", name: "email", placeholder: "Email", onChange: function (e) { return _this.onChange(e.target.value, 'email'); } })),
                        createElement("div", { className: "input-group" },
                            createElement("span", { className: "input-group-addon" },
                                createElement("span", { className: "glyphicon glyphicon-lock" })),
                            createElement("input", { id: "txtPassword", type: "password", className: "form-control", name: "password", placeholder: "Password", onChange: function (e) { return _this.onChange(e.target.value, 'password'); } })),
                        createElement("div", { className: "input-group" },
                            createElement("span", { className: "input-group-addon" },
                                createElement("span", { className: "glyphicon glyphicon-lock" })),
                            createElement("input", { id: "confirmTxtPassword", type: "password", className: "form-control", name: "confirmPassword", placeholder: "Confirm Password", onChange: function (e) { return _this.onChange(e.target.value, 'confirmPassword'); } })),
                        createElement("button", { className: "btn btn-primary btn-block login-button", type: "submit", disabled: !this.state.formValid },
                            createElement("i", { className: "fa fa-sign-in" }),
                            " Create Account "))))));
    };
    return BarongRegisterForm;
}(Component));

export { withBarong, BarongRegisterForm, BarongLoginForm };
