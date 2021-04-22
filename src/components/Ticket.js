import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import TicketStyles from '../styles/TicketStyles.module.css';

const Ticket = props => {
  const { ticket, removeBtn } = props;

  return (
    <tbody className="border m-2">
      <tr>
        <td>
          <div className={TicketStyles.ticketDetails}>
            <h3>{`Airline: ${ticket.airline_name}`}</h3>
            <h3>{`Username: ${ticket.username}`}</h3>
            <h3>{`City: ${ticket.city}`}</h3>
            <h3>{`Date: ${ticket.date}`}</h3>
            <button type="button" className={`${TicketStyles.btn} btn`} onClick={() => removeBtn(ticket)}>Delete Ticket</button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    airline_name: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  removeBtn: PropTypes.func.isRequired,
};

export default Ticket;
