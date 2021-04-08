import {
  LOGOUT_USER,
  USER_API_FAILURE,
  USER_API_REQUEST,
  USER_API_SUCCESS,
} from './actionTypes';

export const userApiRequest = () => ({
  type: USER_API_REQUEST,
});

export const userApiSuccess = data => ({
  type: USER_API_SUCCESS,
  payload: data.user.username,
});

export const userApiFailure = error => ({
  type: USER_API_FAILURE,
  payload: error,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});
