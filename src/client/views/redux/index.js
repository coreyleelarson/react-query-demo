import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import TodoList from './components/todo-list';
import store from './state/store';

function ReduxView() {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
    </Provider>
  );
}

export default ReduxView;
