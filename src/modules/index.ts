import { combineReducers } from 'redux';
// tslint:disable-next-line no-submodule-imports
import { all, call } from 'redux-saga/effects';
import { publicReducer, userReducer } from './app';
import { AlertState, rootHandleAlertSaga } from './public/alert';
import { LanguageState } from './public/i18n';
import { AuthState, rootAuthSaga } from './user/auth';
import { GeetestCaptchaState, rootGeetestCaptchaSaga } from './user/captcha';
import { EmailVerificationState, rootEmailVerificationSaga } from './user/emailVerification';
import { PasswordState, rootPasswordSaga } from './user/password';
import { ProfileState, rootProfileSaga } from './user/profile';

export * from './public/i18n';
export * from './public/alert';
export * from './user/auth';
export * from './user/captcha';
export * from './user/profile';
export * from './user/password';
export * from './user/emailVerification';

export interface RootState {
    public: {
        i18n: LanguageState;
        alerts: AlertState;
    };
    user: {
        auth: AuthState;
        password: PasswordState;
        profile: ProfileState;
        sendEmailVerification: EmailVerificationState;
        captchaKeys: GeetestCaptchaState;
    };
}

export const rootReducer = combineReducers({
    public: publicReducer,
    user: userReducer,
});

export function* rootSaga() {
    yield all([
        call(rootAuthSaga),
        call(rootEmailVerificationSaga),
        call(rootGeetestCaptchaSaga),
        call(rootHandleAlertSaga),
        call(rootPasswordSaga),
        call(rootProfileSaga),
    ]);
}
