import {all} from '@redux-saga/core/effects';
import {SagaHome} from '../Screen/Home/Redux/saga';

export function* AllSaga() {
  yield all([SagaHome()]);
}
