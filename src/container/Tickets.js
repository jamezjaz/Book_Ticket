import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';
import fetchTickets from '../apiRequests/getTicketRequest';
import Ticket from '../components/Ticket';

const Tickets = props => {
  // const { tickets } = props;
  const tickets = useSelector(state => state.ticket.tickets);
  // console.log(' All Ticket objectsssssss', tickets);

  // const ticketId = parseInt(match.params.id, 10);
  // const filteredTickets = tickets.filter(ticket => ticket.id === ticketId);

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets(tickets);
    // console.log('Fetched Tickets', tickets);
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
          {tickets.map(ticket => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  // tickets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchedTickets: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   tickets: state.ticket.tickets,
// });

const mapDispatchToprops = dispatch => ({
  fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
});

export default connect(null, mapDispatchToprops)(Tickets);
