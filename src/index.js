import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, browserHistory  } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';

// load aframe and it's components
require('aframe');
require('aframe-text-component');
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
