import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const ReduxApp = lazy(() => import('client/variants/redux'));
const ReactQueryApp = lazy(() => import('client/variants/react-query'));

render(
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
      <Routes>
        <Route path="/redux" element={<ReduxApp />} />
        <Route path="/react-query" element={<ReactQueryApp />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  document.querySelector('#root')
);
