import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Routes';
import './Assets/Style/index.css'
import { Provider } from 'react-redux';
import Store from './Store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Main/>
    </Provider>
  </React.StrictMode>
);

