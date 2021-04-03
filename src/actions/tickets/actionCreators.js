import {
  BOOK_TICKET,
  DEL_TICKET,
  FETCH_TICKET_FAILURE,
  FETCH_TICKET_REQUEST,
  FETCH_TICKET_SUCCESS,
} from './actionTypes';

export const bookTicketAction = ticket => ({
  type: BOOK_TICKET,
  payload: ticket,
});

export const fetchTicketRequestAction = () => ({
  type: FETCH_TICKET_REQUEST,
});

export const fetchTicketSuccessAction = (tickets, ticket = {}) => ({
  type: FETCH_TICKET_SUCCESS,
  payload: tickets,
  ticket,
});

export const fetchTicketFailure = error => ({
  type: FETCH_TICKET_FAILURE,
  payload: error,
});

export const delTicketAction = ticket => ({
  type: DEL_TICKET,
  payload: ticket,
});
