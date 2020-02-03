import { Config } from './types';

const STORAGE_DEFAULT_LIMIT = 50;

export const defaultConfig: Config = {
    api: {
        authUrl: '',
    },
    withCredentials: true,
    captcha: {
        captchaType: 'none',
        siteKey: '',
    },
    storage: {},
    gaTrackerKey: '',
    msAlertDisplayTime: '5000',
};

export const Cryptobase = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
Cryptobase.config = { ...window.env };
Cryptobase.config.storage = Cryptobase.config.storage || {};
Cryptobase.config.captcha = Cryptobase.config.captcha || defaultConfig.captcha;

export const authUrl = () => Cryptobase.config.api.authUrl;
export const withCredentials = () => Cryptobase.config.withCredentials;
export const defaultStorageLimit = () => Cryptobase.config.storage.defaultStorageLimit || STORAGE_DEFAULT_LIMIT;
export const siteKey = () => Cryptobase.config.captcha.siteKey;
export const captchaType = () => Cryptobase.config.captcha.captchaType;
export const gaTrackerKey = (): string => Cryptobase.config.gaTrackerKey || '';
export const msAlertDisplayTime = (): string => Cryptobase.config.msAlertDisplayTime || '5000';
