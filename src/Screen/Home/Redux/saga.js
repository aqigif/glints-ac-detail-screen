import {put, select, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {giveReviewFailed, giveReviewSuccess, setMovie} from './action';
import {beAxios, imdbAxios} from '../../../utils/customAxios';

function* sagaGetListMovie() {
  try {
    const token = yield select(state => state?.Login?.responseSuccess?.token);
    console.log(token);
    const res = yield imdbAxios({
      url: 'discover/movie',
      method: 'GET',
      headers: {
        authorization: 'bearer' + token,
      },
    });
    console.log(res);
    yield put(setMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
}

export function* SagaHome() {
  yield takeLatest('GET_MOVIE', sagaGetListMovie);
}

function* sagaGiveReviewYield(action) {
  try {
    // const token = yield select(state => state?.Login?.responseSuccess?.token);
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjI0MDE5NzAzLCJleHAiOjE2MjQwMjMzMDN9.n10cIPb9kJePss3zmEzw9MuvaRgNEsf7EO88EVaIevc';
    const {movie_id, rating, review} = action.request;
    console.log(token);
    const res = yield beAxios({
      url: 'milantv/review/' + movie_id,
      method: 'POST',
      headers: {
        authorization: 'Bearer' + token,
      },
      data: {
        rating,
        review,
      },
    });
    // const res = yield beAxios.post('milantv/review/' + movie_id, {
    //     rating,
    //     review,
    //   },
    //   {
    //     headers: {
    //       authorization: 'Bearer' + token,
    //     }
    //   }
    // );
    console.log(res);
    yield put(giveReviewSuccess(res.data));
  } catch (error) {
    console.log(error?.response, 'error');
    yield put(
      giveReviewFailed(
        error?.response?.data || error || {message: 'Terjadi Kesalahan'},
      ),
    );
  }
}

export function* sagaGiveReview() {
  yield takeLatest('MOVIE_REVIEW', sagaGiveReviewYield);
}
