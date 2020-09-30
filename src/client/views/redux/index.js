import Container from '@material-ui/core/Container';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from './state/store';

function ReduxView() {
  return (
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
  );
}

export default ReduxView;
