import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { render } from 'react-dom';
import App from 'client/app';

render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.querySelector('#root')
);
