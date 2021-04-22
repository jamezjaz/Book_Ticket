import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import fetchTickets from '../apiRequests/getTicketRequest';
import Ticket from '../components/Ticket';
import deleteTicket from '../apiRequests/delTicketRequest';
import DropDown from '../components/DropDown';

const Tickets = props => {
  const tickets = useSelector(state => state.ticket.tickets);

  const handleDelTicket = ticket => {
    const { removeTicket } = props;
    removeTicket(ticket);
  };

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets(tickets);
  }, [tickets]);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      <div className="col-10">
        <DropDown />
        <div>
          {/* {ticket && (
            <div>
              {localStorage.getItem('ticket')}
            </div>
          )} */}
          <h2>ALL TICKETS</h2>
          <table className="d-flex flex-wrap">
            {tickets.map(ticket => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                removeBtn={handleDelTicket}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  fetchedTickets: PropTypes.func.isRequired,
  removeTicket: PropTypes.func.isRequired,
};

const mapDispatchToprops = dispatch => ({
  fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
  removeTicket: ticket => dispatch(deleteTicket(ticket)),
});

export default connect(null, mapDispatchToprops)(Tickets);
