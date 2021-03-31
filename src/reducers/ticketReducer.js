import {
  BOOK_TICKET,
  FETCH_TICKET_FAILURE,
  FETCH_TICKET_REQUEST,
  FETCH_TICKET_SUCCESS,
} from '../actions/tickets/actionTypes';

const initialTicket = {
  loading: false,
  tickets: [],
  error: '',
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
        tickets: Object.values(action.payload),
        error: '',
      };
    case FETCH_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
