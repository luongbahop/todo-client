//=== import external ===
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//=== import internal ===
import './config';
import './utils';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
//=== declare variable ===

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
