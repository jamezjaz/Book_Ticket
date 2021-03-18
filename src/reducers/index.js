import { combineReducers } from 'redux';
import airlineReducer from './airlineReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  airline: airlineReducer,
});

export default rootReducer;
