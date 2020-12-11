import { AppRoute } from '../routing';
import { ResetPasswordPath } from './interfaces';

const index = new AppRoute('/');
const login = new AppRoute('/login');
const logout = new AppRoute('/logout');
const register = new AppRoute('/register');
const result = new AppRoute('/result');
const resetPassword = new AppRoute<ResetPasswordPath>('/reset-password', [], ['token']);
const forgotPassword = new AppRoute<ResetPasswordPath>('/forgot-password');
const confirmationEmail = new AppRoute<ResetPasswordPath>('/confirmation-email', [], ['token']);

export const AppUrl = {
    index,
    login,
    register,
    result,
    logout,
    resetPassword,
    forgotPassword,
    confirmationEmail,
};
