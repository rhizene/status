import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import Aside from './components/aside/aside';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aside />
    <App />
  </React.StrictMode>
);
