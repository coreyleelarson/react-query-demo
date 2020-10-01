import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Header from './components/header';
import TodoList from './components/todo-list';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryView() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Header />
      <TodoList />
    </ReactQueryCacheProvider>
  );
}

export default ReactQueryView;
