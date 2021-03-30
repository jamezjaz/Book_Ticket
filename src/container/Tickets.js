import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';
import fetchTickets from '../apiRequests/getTicketRequest';

const Tickets = props => {
  const { tickets } = props;
  console.log(' All Ticket objectsssssss', tickets);

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets(tickets);
    console.log('Fetched Tickets', fetchTickets);
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
        <div className="text-left">
          <p>Hello there!,</p>
          <p>
            I was able to book/create tickets successfully on the
            back end but I&apos;m not able to display all tickets on the
            browser neither am I able to display the details of a specific ticket.
            The response from the GET request also drops fine on the console.
          </p>
          <p>Please, I need help with this feature.</p>
          <p>Thank you</p>
        </div>
        <div>
          {/* {tickets.map(ticket => (
            <TicketDetails key={ticket.id} ticket={ticket} />
            <div key={ticket.id}>
              <h3>{ticket.airline_name}</h3>
              <h4>{ticket.username}</h4>
              <h5>{ticket.city}</h5>
              <p>{ticket.date}</p>
            </div>
          ))} */}
          {tickets.map(ticket => (
            <div key={ticket.id}>
              <h3>{ticket.airline_name}</h3>
              <h3>{ticket.username}</h3>
              <h3>{ticket.city}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchedTickets: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
});

const mapDispatchToprops = dispatch => ({
  fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Tickets);
