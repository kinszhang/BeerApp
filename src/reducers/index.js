import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import beer from './beer';
import util from './util';
import brewery from './brewery';

export default combineReducers({
  util,
  beer,
  brewery,
  router: routerReducer,
});