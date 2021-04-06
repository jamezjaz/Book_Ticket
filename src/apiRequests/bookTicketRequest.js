import axios from 'axios';
import { fetchTicketFailure, fetchTicketRequestAction, fetchTicketSuccessAction } from '../actions/tickets/actionCreators';
import header, { url } from './apiLink';

const bookTicket = (ticketObj, callback) => dispatch => {
  dispatch(fetchTicketRequestAction());
  axios.post(`${url}/tickets`, ticketObj, header)
    .then(async response => {
      const ticketRes = response.data;
      await dispatch(fetchTicketSuccessAction(ticketRes, ticketRes));
      callback(ticketRes.id);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchTicketFailure(errorMsg));
    });
};

export default bookTicket;
