// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { generate2faQRData, generate2faQRError } from '../actions';

const generate2faQROptions: RequestOptions = {
    apiVersion: 'barong',
};

interface GenerateQRResponse {
    data: {
        barcode: string;
        url: string;
    };
}

export function* generate2faQRSaga() {
    try {
        const qrData: GenerateQRResponse = yield call(API.post(generate2faQROptions), '/resource/otp/generate_qrcode');
        const { barcode, url } = qrData.data;
        yield put(generate2faQRData({ barcode, url }));
    } catch (error) {
        yield put(generate2faQRError(error));
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
