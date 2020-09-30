import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';
import App from 'client';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

if (module.hot) {
  module.hot.accept('client', () => {
    root.render(<App />);
  });
}
