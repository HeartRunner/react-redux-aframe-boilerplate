import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  items,
});

export default rootReducer;
