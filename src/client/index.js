import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReactQueryApp from 'client/variants/react-query';
import ReduxApp from 'client/variants/redux';

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
    <Routes>
      <Route path="/react-query" element={<ReactQueryApp />} />
      <Route path="/redux" element={<ReduxApp />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
