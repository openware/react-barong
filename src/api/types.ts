export interface Config {
    api: {
        authUrl: string;
    };
    withCredentials: boolean;
    storage: {
        defaultStorageLimit?: number;
    };
    captcha: {
        captchaType: 'recaptcha' | 'geetest' | 'none';
        siteKey: string;
    };
    gaTrackerKey?: string;
    msAlertDisplayTime?: string;
}
