import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducer';
import Screen from './src/Screen';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}
