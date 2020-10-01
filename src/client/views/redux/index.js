import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import UserList from './components/user-list';
import store from './state/store';

function ReduxView() {
  return (
    <Provider store={store}>
      <Header />
      <UserList />
    </Provider>
  );
}

export default ReduxView;
