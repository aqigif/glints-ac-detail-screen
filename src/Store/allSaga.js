import {all} from '@redux-saga/core/effects';
import {sagaGiveReview, SagaHome} from '../Screen/Home/Redux/saga';
import {SagaLogin} from '../Screen/Login/saga';

export function* AllSaga() {
  yield all([SagaHome(), SagaLogin(), sagaGiveReview()]);
}
