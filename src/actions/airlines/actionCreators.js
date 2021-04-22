import {
  ADD_AIRLINE,
  FETCH_AIRLINE_FAILURE,
  FETCH_AIRLINE_REQUEST,
  FETCH_AIRLINE_SUCCESS,
} from './actionTypes';

export const fetchAirlineRequest = () => ({
  type: FETCH_AIRLINE_REQUEST,
});

export const fetchAirlineSuccess = airlines => ({
  type: FETCH_AIRLINE_SUCCESS,
  payload: airlines,
});

export const fetchAirlineFailure = error => ({
  type: FETCH_AIRLINE_FAILURE,
  payload: error,
});

export const addAirlineAction = airline => ({
  type: ADD_AIRLINE,
  payload: airline,
});
