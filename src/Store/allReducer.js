import {combineReducers} from 'redux';
import {loginReducer} from '../Screen/Login/reducer';
import {RegisterReducer} from '../Screen/Register/reducer';
import GlobalReducer from './GlobalReducer';
import homeReducer from '../Screen/Home/Redux/reducer';

export const allReducer = combineReducers({
  Global: GlobalReducer,
  Register: RegisterReducer,
  Login: loginReducer,
  Home: homeReducer,
});
