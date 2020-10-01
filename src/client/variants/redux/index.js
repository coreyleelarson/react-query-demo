import Container from '@material-ui/core/Container';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import store from './state/store';
import DashboardView from './views/dashboard';
import ProjectListView from './views/project-list';
import UserListView from './views/user-list';

function ReduxView() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/redux" component={DashboardView} />
          <Route path="/redux/projects" component={ProjectListView} />
          <Route path="/redux/users" component={UserListView} />
        </Switch>
      </Container>
    </Provider>
  );
}

export default ReduxView;
