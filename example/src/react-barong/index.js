/* tslint-disable */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

/* eslint-disable */
var PASSWORD_REGEX = /^(?=.{8,})/;
var EMAIL_REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

function post(host, subpath, body) {
    return axios.post(host + "/" + subpath, body);
}
var ApiUtil = {
    post: post,
    login: function (host, data) {
        return post(host, 'identity/sessions', data);
    },
    register: function (host, data) {
        return post(host, 'identity/users', data);
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
    var host = _a.host, redirection = _a.redirection;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.errors;
    var onSubmit = useCallback(function (data) {
        ApiUtil.login(host, data)
            .then(function (response) {
            if (response.status === 200) {
                window.location.replace(redirection);
            }
            else {
                window.console.log(response);
            }
        })
            .catch(function (err) {
            window.console.error(err);
        });
    }, [host, redirection]);
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
            React.createElement(Button, { type: "submit", block: true }, "Login"),
            React.createElement("div", { className: "login-options text-center mt-3" },
                React.createElement("div", { className: "login-forgot" }, "Forgot Password?")))));
};

var BarongRegisterForm = function (_a) {
    var host = _a.host, redirection = _a.redirection;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.errors, watch = _b.watch;
    var onSubmit = useCallback(function (data) {
        ApiUtil.register(host, data)
            .then(function (response) {
            response.status === 201 ? window.location.replace("" + redirection) : window.console.log(response);
        })
            .catch(function (error) {
            window.console.log(error.response);
        });
    }, [host, redirection]);
    useEffect(function () {
        console.log(errors);
    }, [errors]);
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

export { BarongRegisterForm, BarongLoginForm };
