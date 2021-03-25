import axios from 'axios';
import { fetchTicketFailure, fetchTicketRequestAction, fetchTicketSuccessAction } from '../actions/tickets/actionCreators';
import header, { url } from './apiLink';

const bookTicket = ticketObj => dispatch => {
  dispatch(fetchTicketRequestAction());
  axios.post(`${url}/tickets`, ticketObj, header)
    .then(response => {
      const ticketRes = response.data;
      dispatch(fetchTicketSuccessAction(ticketRes));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchTicketFailure(errorMsg));
    });
};

export default bookTicket;
