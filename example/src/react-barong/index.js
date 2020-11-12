/* tslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

/* eslint-disable */
var PASSWORD_REGEX = /^(?=.{8,})/;
var EMAIL_REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

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

var _this = undefined;
function baseFetch(options) {
    var rootUrl = options.rootUrl, path = options.path, method = options.method, body = options.body;
    var endpoint = (rootUrl || '').replace(/^\//, '') + "/" + path;
    var headers = {};
    headers['Content-Type'] = 'application/json';
    return fetch(endpoint, {
        method: method,
        mode: 'cors',
        body: body,
        headers: __assign({}, headers),
    });
}
function post(host, subpath, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, baseFetch({ method: 'POST', rootUrl: host, path: subpath, body: body })];
        });
    });
}
var BarongApiUtil = {
    post: post,
    login: function (host, data) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, post(host, 'identity/sessions', data)];
        });
    }); },
    logout: function (host) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, baseFetch({ method: 'DELETE', rootUrl: host, path: 'identity/sessions' })];
        });
    }); },
    register: function (host, data) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, post(host, 'identity/users', data)];
        });
    }); },
};

var BarongLayout = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: "barong-layout" }, children);
};

var InputError = function (_a) {
    var name = _a.name, errors = _a.errors;
    var _b = useState(), text = _b[0], setText = _b[1];
    useEffect(function () {
        if (errors) {
            var error = errors[name];
            if (error) {
                setText(error.message);
            }
        }
    }, [errors]);
    return text ? React.createElement(Form.Text, null, text) : null;
};

var BarongLoginForm = function (_a) {
    var host = _a.host, redirection = _a.redirection, testMode = _a.testMode, forgotPasswordUrl = _a.forgotPasswordUrl;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.errors;
    var onSubmit = useCallback(function (data) {
        if (testMode === true) {
            window.location.replace(redirection);
        }
        else {
            BarongApiUtil.login(host, data)
                .then(function (response) {
                if (response.status === 200) {
                    window.location.replace(redirection);
                }
                else {
                    window.console.error(response);
                }
            })
                .catch(function (err) {
                window.console.error(err);
            });
        }
    }, [host, redirection, testMode]);
    return (React.createElement(BarongLayout, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "text", name: "email", placeholder: "Email", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: EMAIL_REGEX, message: 'Incorrect Email' },
                    }) }),
                React.createElement(InputError, { name: "email", errors: errors })),
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "password", name: "password", placeholder: "Password", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                    }) }),
                React.createElement(InputError, { name: "password", errors: errors })),
            React.createElement(Form.Group, null,
                React.createElement(Button, { type: "submit", block: true }, "Login")),
            forgotPasswordUrl ? (React.createElement(Form.Group, null,
                React.createElement("div", { className: "login-form__forgot" },
                    React.createElement("a", { href: forgotPasswordUrl }, "Forgot Password?")))) : null)));
};

var BarongRegisterForm = function (_a) {
    var host = _a.host, redirection = _a.redirection, testMode = _a.testMode;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.errors, watch = _b.watch;
    var onSubmit = useCallback(function (data) {
        if (testMode === true) {
            window.location.replace(redirection);
        }
        else {
            BarongApiUtil.register(host, data)
                .then(function (response) {
                response.status === 201
                    ? window.location.replace("" + redirection)
                    : window.console.error(response);
            })
                .catch(function (error) {
                window.console.log(error.response);
            });
        }
    }, [host, redirection, testMode]);
    return (React.createElement(BarongLayout, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "text", name: "email", placeholder: "Email", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: EMAIL_REGEX, message: 'Incorrect Email' },
                    }) }),
                React.createElement(InputError, { name: "email", errors: errors })),
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "password", name: "password", placeholder: "Password", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                    }) }),
                React.createElement(InputError, { name: "password", errors: errors })),
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "password", name: "confirmPassword", placeholder: "Confirm Password", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                        validate: function (value) { return value === watch('password') || 'Passwords do not match.'; },
                    }) }),
                React.createElement(InputError, { name: "confirmPassword", errors: errors })),
            React.createElement(Button, { type: "submit", block: true }, "Create Account"))));
};

var BarongLogoutButton = function (_a) {
    var host = _a.host, redirection = _a.redirection, render = _a.render, _b = _a.text, text = _b === void 0 ? 'Log Out' : _b, testMode = _a.testMode;
    var onSubmit = useCallback(function () {
        if (testMode === true) {
            window.location.replace(redirection);
        }
        else {
            BarongApiUtil.logout(host)
                .then(function (response) {
                if (response.status === 200) {
                    window.location.replace(redirection);
                }
                else {
                    window.console.error(response);
                }
            })
                .catch(function (err) {
                window.console.error(err);
            });
        }
    }, [host, redirection, testMode]);
    return render ? render({ onClick: onSubmit }) : React.createElement(Button, { onClick: onSubmit }, text);
};

export { BarongRegisterForm, BarongLoginForm, BarongLogoutButton, BarongApiUtil };
