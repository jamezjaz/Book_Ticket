import {
  BOOK_TICKET,
  DEL_TICKET,
  FETCH_TICKET_FAILURE,
  FETCH_TICKET_REQUEST,
  FETCH_TICKET_SUCCESS,
} from '../actions/tickets/actionTypes';

const initialTicket = {
  ticket: {},
  loading: false,
  tickets: [],
  error: '',
};

const deleteTicket = (state, action) => {
  const index = state.map(item => item.id).indexOf(action.id);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  return newState;
};

const ticketReducer = (state = initialTicket, action) => {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        loading: false,
        tickets: Object.keys(action.payload),
        error: '',
      };
    case FETCH_TICKET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TICKET_SUCCESS:
      return {
        loading: false,
        tickets: action.payload.id ? state.tickets : Object.values(action.payload),
        ticket: action.ticket,
        error: '',
      };
    case FETCH_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DEL_TICKET:
      return {
        ...state,
        deleteTicket,
      };
    default:
      return state;
  }
};

export default ticketReducer;
