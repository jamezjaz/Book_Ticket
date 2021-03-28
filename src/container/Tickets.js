import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import TicketDetails from '../components/TicketDetails';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';

const Tickets = props => {
  const { tickets } = props;

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
          <p>Dear Reviewer,</p>
          <p>
            I was able to book/create tickets successfully on the
            back end have them logged to the console but I&apos;m
            unable to render these tickets on the browser, and right now I&apos;m almost saturated.
          </p>
          <p>Please, I need help with this feature.</p>
          <p>Thank you</p>
        </div>
        <div>
          {tickets.map(ticket => (
            <TicketDetails key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    ticket: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, null)(Tickets);
