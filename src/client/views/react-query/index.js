import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Header from './components/header';
import UserList from './components/user-list';

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
      <UserList />
    </ReactQueryCacheProvider>
  );
}

export default ReactQueryView;
