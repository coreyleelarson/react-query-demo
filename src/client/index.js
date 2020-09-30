import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const ReduxApp = lazy(() =>
  import(/* webpackChunkName: "redux" */ 'client/variants/redux')
);
const ReactQueryApp = lazy(() =>
  import(/* webpackChunkName: "react-query" */ 'client/variants/react-query')
);

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <nav>
        <ul>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/react-query">React Query</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/redux" component={ReduxApp} />
          <Route path="/react-query" component={ReactQueryApp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
