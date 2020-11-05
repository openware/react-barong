import { AppRoute } from '../routing';

const index = new AppRoute('/');
const login = new AppRoute('/login');
const logout = new AppRoute('/logout');
const register = new AppRoute('/register');
const result = new AppRoute('/result');

export const AppUrl = {
    index,
    login,
    register,
    result,
    logout,
};
