import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Header from './components/header';
import TodoList from './components/todo-list';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      // refetchInterval: 1000,
      // refetchOnWindowFocus: false,
      staleTime: 10000,
      // suspense: true,
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
