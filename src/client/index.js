import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import TopHeader from './components/top-header';

const ReduxView = lazy(() =>
  import(/* webpackChunkName: "redux" */ './views/redux')
);
const ReactQueryView = lazy(() =>
  import(/* webpackChunkName: "react-query" */ './views/react-query')
);

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <TopHeader />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/redux" component={ReduxView} />
            <Route path="/react-query" component={ReactQueryView} />
            <Route path="*">
              <Redirect to="/redux" />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;
