import { FETCH_AIRLINE_FAILURE, FETCH_AIRLINE_REQUEST, FETCH_AIRLINE_SUCCESS } from '../actions/airlines/actionTypes';

const initialState = {
  loading: false,
  airlines: [],
  error: '',
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRLINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_AIRLINE_SUCCESS:
      return {
        loading: false,
        airlines: action.payload,
        error: '',
      };
    case FETCH_AIRLINE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default airlineReducer;
