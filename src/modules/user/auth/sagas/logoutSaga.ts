// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { signInRequire2FA } from '../../auth';
import { userReset } from '../../profile';
import { logoutError } from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'barong',
};

export function* logoutSaga() {
    try {
        yield call(API.delete(requestOptions), '/identity/sessions');
        yield put(userReset());
        yield put(signInRequire2FA({ require2fa: false }));
    } catch (error) {
        yield put(logoutError(error));
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
