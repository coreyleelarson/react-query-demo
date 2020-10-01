import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopHeader from './components/top-header';

const ReduxView = lazy(() =>
  import(/* webpackChunkName: "redux" */ './variants/redux')
);
const ReactQueryView = lazy(() =>
  import(/* webpackChunkName: "react-query" */ './variants/react-query')
);

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <TopHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/redux" component={ReduxView} />
          <Route path="/react-query" component={ReactQueryView} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
