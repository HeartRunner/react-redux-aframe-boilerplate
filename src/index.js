import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';
import routes from './routes';
// load aframe and it's components
import AFrame from 'aframe';
AFrame.registerComponent('text', require('aframe-text-component').component);

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
