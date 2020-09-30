import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux App</h1>
    </Provider>
  );
}

export default App;
