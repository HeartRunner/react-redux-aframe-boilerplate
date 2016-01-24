import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../modules';

const logger = createLogger({
  collapsed: true,
  predicate: () =>
    process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
