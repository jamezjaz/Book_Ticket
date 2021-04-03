import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';
import fetchTickets from '../apiRequests/getTicketRequest';
import Ticket from '../components/Ticket';
import deleteTicket from '../apiRequests/delTicketRequest';

const Tickets = props => {
  const tickets = useSelector(state => state.ticket.tickets);

  const handleDelTicket = ticket => {
    const { removeTicket } = props;
    removeTicket(ticket);
    console.log('Deleted');
  };

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets(tickets);
  }, []);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      <div className="col-10">
        <Dropdown className="d-flex d-md-none mb-5">
          <Dropdown.Toggle className="bg-white" id="dropdown-basic">
            <img src={menu} alt="menu" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/airlinesList" active>AIRLINES</Dropdown.Item>
            <Dropdown.Item href="/tickets">TICKETS</Dropdown.Item>
            <Dropdown.Item href="/">LogOut</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
  // ticket: PropTypes.objectOf(PropTypes.any),
};

const mapDispatchToprops = dispatch => ({
  fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
  removeTicket: ticket => dispatch(deleteTicket(ticket)),
});

export default connect(null, mapDispatchToprops)(Tickets);
