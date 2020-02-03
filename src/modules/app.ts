import { combineReducers } from 'redux';
import { alertReducer  } from './public/alert';
import { changeLanguageReducer  } from './public/i18n';
import { authReducer  } from './user/auth';
import { getGeetestCaptchaReducer } from './user/captcha';
import { sendEmailVerificationReducer } from './user/emailVerification';
import { passwordReducer  } from './user/password';
import { profileReducer  } from './user/profile';

export const publicReducer = combineReducers({
    i18n: changeLanguageReducer,
    alerts: alertReducer,
});

export const userReducer = combineReducers({
    auth: authReducer,
    password: passwordReducer,
    profile: profileReducer,
    sendEmailVerification: sendEmailVerificationReducer,
    captchaKeys: getGeetestCaptchaReducer,
});
