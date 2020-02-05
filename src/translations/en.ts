import { en as customTranslations } from '../custom/translations/en';

export const en = {
    'page.header.navbar.signIn': 'Sign In',

    'page.header.navbar.profile': 'Profile',
    'page.header.navbar.logout': 'Logout',

    'page.header.signIn': 'Sign In',
    'page.header.signIn.email': 'Email',
    'page.header.signIn.password': 'Password',
    'page.header.signIn.password.message.error': 'Password is invalid',
    'page.header.signIn.receiveConfirmation': 'Didn\'t receive your confirmation email?',
    'page.header.signIn.forgotPassword': 'Forgot your password?',
    'page.header.signIn.resetPassword.title': 'Reset password',
    'page.header.signIn.resetPassword.newPassword': 'New password',
    'page.header.signIn.resetPassword.repeatPassword': 'Repeat password',
    'page.header.signIn.resetPassword.button': 'Change',
    'page.header.signIn.resetPassword.error': 'Fields are empty or don`t matches',

    'page.header.signUp': 'Sign Up',
    'page.header.signUp.email': 'Email',
    'page.header.signUp.email.message.error': 'Email is invalid',
    'page.header.signUp.password': 'Password',
    'page.header.signUp.password.message.error': 'Password must contain at least 8 characters, at least one capital letter and one digit',
    'page.header.signUp.confirmPassword': 'Confirm Password',
    'page.header.signUp.confirmPassword.message.error': 'Passwords don\'t match',
    'page.header.signUp.referalCode': 'Referral Code',
    'page.header.signUp.terms': 'I have read and agree to the Terms of Service',
    'page.header.signUp.modal.header': 'VERIFY YOUR EMAIL ADDRESS',
    'page.header.signUp.modal.body': 'To complete registration, check for an ' +
                                      'email in your inbox with further ' +
                                      'instruction. If you cannot find the email, ' +
                                      'please check your spam folder',
    'page.header.signUp.modal.footer': 'OK',
    'page.resendConfirmation': 'Resend Confirmation',
    'page.forgotPassword': 'Forgot Password',
    'page.forgotPassword.message': 'Enter email to reset password',
    'page.password2fa': '2FA verification',
    'page.password2fa.message': 'Enter 2fa code from the app',
    'page.forgotPassword.email': 'Email',
    'page.forgotPassword.send': 'Send',
    'page.noDataToShow': 'There is no data to show',

    // success messages
    'success.otp.enabled': '2FA was enabled',
    'success.otp.disabled': '2FA was disabled',
    'success.password.changed': 'Password was changed',
    'success.password.forgot': 'Password reset link has been sent to your email',
    'success.password.changed.successfuly': 'Password was changed',
    'success.message.sent': 'Message was sent',
    'success.email.confirmed': 'Your email address has been successfully confirmed',

    // error messages
    // barong

    'password.requirements': 'Password does not meet the minimum requirements',
    'password.password.password_strength': 'Password is too weak',

    'identity.session.invalid_login_params': 'Invalid Email or Password',
    'identity.session.invalid': 'Invalid Session',
    'identity.session.not_active': 'Your account is not active',
    'identity.session.banned': 'Your account is banned',
    'identity.session.invalid_params': 'Invalid Email or Password',
    'identity.session.missing_otp': 'The account has enabled 2FA but OTP code is missing',
    'identity.session.invalid_otp': 'OTP code is invalid',

    'jwt.decode_and_verify': 'Failed to decode and verify JWT',
    'authz.invalid_session': 'Failed to decode cookies',

    // validation errors
    // identity module
    'identity.session.missing_emai': 'Email is missing',
    'identity.session.missing_password': 'Password is missing',
    'identity.session.invalid_captcha_format': 'Invalid captcha format',

    ...customTranslations,
};
