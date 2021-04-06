import axios from 'axios';
import { fetchTicketFailure, fetchTicketRequestAction, fetchTicketSuccessAction } from '../actions/tickets/actionCreators';
import header, { url } from './apiLink';

const fetchTicketDetails = ticket => dispatch => {
  dispatch(fetchTicketRequestAction());
  axios.get(`${url}/tickets/${ticket.id}`, header)
    .then(response => {
      const ticketsRes = response.data;
      dispatch(fetchTicketSuccessAction(ticketsRes, ticketsRes));
      console.log('Ticket responses', ticketsRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchTicketFailure(errorMsg));
    });
};

export default fetchTicketDetails;
