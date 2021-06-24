import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {Persistor, Store} from './src/Store/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Root from './Root';
import HomeCart from './src/Screen/Home/HomeCart';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <HomeCart />
      </PersistGate>
    </Provider>
  );
}
