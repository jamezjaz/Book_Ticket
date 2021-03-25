import { combineReducers } from 'redux';
import airlineReducer from './airlineReducer';
import ticketReducer from './ticketReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  airline: airlineReducer,
  ticket: ticketReducer,
});

export default rootReducer;
