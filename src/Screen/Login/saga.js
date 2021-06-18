import {put, takeLatest} from 'redux-saga/effects';
import {loginFailed, loginSucces} from './action';
import {reqresAxios} from '../../utils/customAxios';

function* sagaLoginYield(action) {
  const {email, password} = action.request;
  try {
    const res = yield reqresAxios({
      url: 'login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    if (res?.data?.token) {
      yield put(loginSucces(res.data));
    } else {
      yield put(loginFailed(res.data));
    }
  } catch (error) {
    yield put(loginFailed(error?.response?.data || error?.response || error));
  }
}

export function* SagaLogin() {
  yield takeLatest('LOGIN', sagaLoginYield);
}
