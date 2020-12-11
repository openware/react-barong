/* tslint-disable */
import axios from 'axios';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { parseUrl } from 'query-string';

/* eslint-disable */
var PASSWORD_REGEX = /^(?=.{8,})/;
var EMAIL_REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

// function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse> {
//     return axios.post(`${host}/${subpath}`, body);
// }
function handleApiCall(result, onSuccess, onError) {
    result
        .then(function (response) {
        if (response.status === 201) {
            onSuccess(response.data);
        }
        else {
            if (onError) {
                onError("API error: " + response.statusText);
            }
            window.console.error(response);
        }
    })
        .catch(function (error) {
        if (onError) {
            onError("API error: " + error.response);
        }
        window.console.log(error.response);
    });
}
var BarongApiUtil = {
    login: function (host, data, onSuccess, onError) {
        return handleApiCall(axios.post(host + "identity/sessions", data), onSuccess, onError);
    },
    logout: function (host, onSuccess, onError) {
        return handleApiCall(axios.delete(host + "/identity/sessions"), onSuccess, onError);
    },
    register: function (host, data, onSuccess, onError) {
        return handleApiCall(axios.post(host + "/identity/users", data), onSuccess, onError);
    },
    resetPassword: function (host, data, onSuccess, onError) {
        return handleApiCall(axios.put(host + "/identity/users/password/confirm_code", data), onSuccess, onError);
    },
    forgotPassword: function (host, data, onSuccess, onError) {
        return handleApiCall(axios.post(host + "/identity/users/password/generate_code", data), onSuccess, onError);
    },
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
    var handleSuccess = useCallback(function () {
        window.location.replace(redirection);
    }, [redirection]);
    var onSubmit = useCallback(function (data) {
        if (testMode === true) {
            handleSuccess();
        }
        else {
            BarongApiUtil.login(host, data, handleSuccess);
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
    var handleSuccess = useCallback(function () {
        window.location.replace(redirection);
    }, [redirection]);
    var onSubmit = useCallback(function (data) {
        if (testMode === true) {
            handleSuccess();
        }
        else {
            BarongApiUtil.register(host, data, handleSuccess);
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

var BarongResetPasswordForm = function (_a) {
    var host = _a.host, redirection = _a.redirection, testMode = _a.testMode, _b = _a.tokenParameterName, tokenParameterName = _b === void 0 ? 'reset_password_token' : _b;
    var _c = useForm(), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.errors, watch = _c.watch;
    var token = useMemo(function () {
        var params = parseUrl("" + window.location).query;
        return params[tokenParameterName] || '';
    }, [tokenParameterName]);
    var handleSuccess = useCallback(function () {
        window.location.replace(redirection);
    }, [redirection]);
    var onSubmit = useCallback(function (data) {
        data.reset_password_token = token;
        if (testMode === true) {
            handleSuccess();
        }
        else {
            BarongApiUtil.resetPassword(host, data, handleSuccess);
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
    var handleSuccess = useCallback(function () {
        window.location.replace(redirection);
    }, [redirection]);
    var onSubmit = useCallback(function () {
        if (testMode === true) {
            handleSuccess();
        }
        else {
            BarongApiUtil.logout(host, handleSuccess);
        }
    }, [host, redirection, testMode]);
    return render ? render({ onClick: onSubmit }) : React.createElement(Button, { onClick: onSubmit }, text);
};

var BarongForgotPasswordForm = function (_a) {
    var host = _a.host, testMode = _a.testMode, _b = _a.delay, delay = _b === void 0 ? 60 : _b;
    var _c = useState(0), timeLeft = _c[0], setTimeLeft = _c[1];
    var _d = useState(false), disable = _d[0], setDisable = _d[1];
    var _e = useForm(), register = _e.register, handleSubmit = _e.handleSubmit, errors = _e.errors;
    var handleSuccess = useCallback(function () {
        setDisable(true);
    }, []);
    var onSubmit = useCallback(function (data) {
        if (testMode === true) {
            handleSuccess();
        }
        else {
            BarongApiUtil.forgotPassword(host, data, handleSuccess);
        }
    }, [host, testMode]);
    useEffect(function () {
        if (disable) {
            setTimeLeft(delay);
        }
    }, [disable, delay]);
    useEffect(function () {
        if (timeLeft > 0) {
            var timer_1 = setTimeout(function () {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return function () {
                clearTimeout(timer_1);
            };
        }
        else {
            setDisable(false);
            return null;
        }
    }, [timeLeft]);
    return (React.createElement(BarongLayout, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(Form.Group, null,
                React.createElement(Form.Control, { type: "text", name: "email", placeholder: "Enter your email", ref: register({
                        required: { value: true, message: 'Required' },
                        pattern: { value: EMAIL_REGEX, message: 'Incorrect Email' },
                    }) }),
                React.createElement(InputError, { name: "email", errors: errors })),
            React.createElement(Button, { type: "submit", block: true, disabled: disable }, disable ? "Resend in " + timeLeft + "s" : 'Send'))));
};

export { BarongRegisterForm, BarongLoginForm, BarongLogoutButton, BarongApiUtil, BarongResetPasswordForm, BarongForgotPasswordForm };
