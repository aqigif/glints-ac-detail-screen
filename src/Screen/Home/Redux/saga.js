import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {setMovie} from './action';

function* sagaGetListMovie() {
  const res = yield axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf',
  );
  yield put(setMovie(res.data.results));
}

export function* SagaHome() {
  yield takeLatest('GET_MOVIE', sagaGetListMovie);
}
