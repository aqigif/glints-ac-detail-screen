import {put, takeLatest} from 'redux-saga/effects';
import {loginFailed, loginSucces} from './action';
import {reqresAxios} from '../../utils/customAxios';
import axios from 'axios';

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
    // const res = yield reqresAxios.post('login', {
    //   email,
    //   password,
    // });
    // const res = yield axios.post('https://reqres.in/api/login', {
    //   email,
    //   password,
    // });
    console.log(res);
    if (res?.data?.token) {
      yield put(loginSucces(res.data));
    } else {
      yield put(loginFailed(res.data));
    }
  } catch (error) {
    console.log(error?.response);
    yield put(loginFailed(error?.response?.data || error?.response || error));
  }
}

export function* SagaLogin() {
  yield takeLatest('LOGIN', sagaLoginYield);
}
