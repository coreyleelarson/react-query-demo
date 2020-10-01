import Container from '@material-ui/core/Container';
import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import DashboardView from './views/dashboard';
import ProjectListView from './views/project-list';
import UserListView from './views/user-list';

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
      <Container>
        <Header />
        <Switch>
          <Route exact path="/react-query" component={DashboardView} />
          <Route path="/react-query/projects" component={ProjectListView} />
          <Route path="/react-query/users" component={UserListView} />
        </Switch>
      </Container>
    </ReactQueryCacheProvider>
  );
}

export default ReactQueryView;
