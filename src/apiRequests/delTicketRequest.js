import axios from 'axios';
import header, { url } from './apiLink';
import { delTicketAction } from '../actions/tickets/actionCreators';

const deleteTicket = ticket => dispatch => {
  dispatch(delTicketAction(ticket));
  axios.delete(`${url}/tickets/${ticket.id}`, ticket, header);
};

export default deleteTicket;
