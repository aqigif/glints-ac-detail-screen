import {createStore, applyMiddleware} from 'redux';
import {allReducer} from './allReducer';
import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {AllSaga} from './allSaga';

const persistConfig = {
  key: 'keyConfig',
  storage: AsyncStorage,
};

const SagaMiddleware = createSaga();

const persistedReducer = persistReducer(persistConfig, allReducer);

export const Store = createStore(
  persistedReducer,
  applyMiddleware(logger, SagaMiddleware),
);

export const Persistor = persistStore(Store);

SagaMiddleware.run(AllSaga);
