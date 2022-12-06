import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

