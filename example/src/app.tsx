import React from 'react';

import { withBarong, BarongLoginForm, BarongRegisterForm } from './react-barong';

const Register = withBarong(BarongRegisterForm, {
    type: 'register',
    host: 'http://localhost:3000/api/v2',
    redirection: 'http://localhost:3000/office',
});

const Login = withBarong(BarongLoginForm, {
    type: 'login',
    host: 'http://localhost:3000/api/v2',
    redirection: 'http://localhost:3000/office',
});

const App: React.FC = () => {
    return (
        <div>
            <h2>Login</h2>
            <Login />
            <h2>Register</h2>
            <Register />
        </div>
    );
};

export default App;
