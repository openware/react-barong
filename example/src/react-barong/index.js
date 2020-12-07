/* tslint-disable */
import axios from 'axios';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { parseUrl } from 'query-string';

/* eslint-disable */
var PASSWORD_REGEX = /^(?=.{8,})/;
var EMAIL_REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
//# sourceMappingURL=validation.js.map

function post(host, subpath, body) {
    return axios.post(host + "/" + subpath, body);
}
var BarongApiUtil = {
    post: post,
    login: function (host, data) {
        return post(host, 'identity/sessions', data);
    },
    logout: function (host) {
        return axios.delete(host + "/identity/sessions");
    },
    register: function (host, data) {
        return post(host, 'identity/users', data);
    },
    resetPassword: function (host, data) {
        return axios.put(host + "/identity/users/password/confirm_code", data);
    },
};
//# sourceMappingURL=api.js.map

//# sourceMappingURL=index.js.map

var BarongLayout = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: "barong-layout" }, children);
};
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=index.js.map

var BarongResetPasswordForm = function (_a) {
    var host = _a.host, redirection = _a.redirection, testMode = _a.testMode, _b = _a.tokenParameterName, tokenParameterName = _b === void 0 ? 'reset_password_token' : _b;
    var _c = useForm(), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.errors, watch = _c.watch;
    var token = useMemo(function () {
        var params = parseUrl("" + window.location).query;
        return params[tokenParameterName] || '';
    }, [tokenParameterName]);
    var onSubmit = useCallback(function (data) {
        data.reset_password_token = token;
        if (testMode === true) {
            window.location.replace(redirection);
        }
        else {
            BarongApiUtil.resetPassword(host, data)
                .then(function (response) {
                response.status === 201
                    ? window.location.replace("" + redirection)
                    : window.console.error(response);
            })
                .catch(function (error) {
                window.console.log(error.response);
            });
        }
    }, [host, redirection, testMode, token]);
    return (React.createElement(BarongLayout, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "password", name: "password", placeholder: "Password", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                    }) }),
                React.createElement(InputError, { name: "password", errors: errors })),
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "password", name: "confirm_password", placeholder: "Confirm Password", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: PASSWORD_REGEX, message: 'Incorrect Password' },
                        validate: function (value) { return value === watch('password') || 'Passwords do not match.'; },
                    }) }),
                React.createElement(InputError, { name: "confirmPassword", errors: errors })),
            React.createElement(Button, { type: "submit", block: true }, "Reset"))));
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
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map

export { BarongRegisterForm, BarongLoginForm, BarongLogoutButton, BarongApiUtil, BarongResetPasswordForm };
