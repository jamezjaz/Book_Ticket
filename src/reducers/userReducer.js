import {
  LOGOUT_USER,
  USER_API_FAILURE,
  USER_API_REQUEST,
  USER_API_SUCCESS,
} from '../actions/users/actionTypes';

const initialState = {
  loading: false,
  loginStatus: false,
  user: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
        loginStatus: true,
      };
    case USER_API_FAILURE:
      return {
        ...state,
        loading: false,
        loginStatus: false,
        user: [],
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        loading: false,
        loginStatus: false,
        user: [],
      };
    default:
      return state;
  }
};

export default userReducer;
