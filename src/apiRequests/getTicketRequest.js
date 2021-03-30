import axios from 'axios';
import { fetchTicketFailure, fetchTicketRequestAction, fetchTicketSuccessAction } from '../actions/tickets/actionCreators';
import header, { url } from './apiLink';

const fetchTickets = () => dispatch => {
  dispatch(fetchTicketRequestAction());
  axios.get(`${url}/tickets`, header)
    .then(response => {
      const ticketsRes = response.data;
      dispatch(fetchTicketSuccessAction(ticketsRes));
      console.log('Ticket responses', ticketsRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchTicketFailure(errorMsg));
    });
};

export default fetchTickets;
