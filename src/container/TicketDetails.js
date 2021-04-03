import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import fetchTicketDetails from '../apiRequests/getTicketDetails';
import menu from '../assets/hamburger-menu.png';
import SideNav from '../components/SideNav';
import TicketDetailsStyles from '../styles/TicketDetailsStyles.module.css';

const TicketDetails = props => {
  const [ticket, setTicket] = useState(null);
  const { match } = props;
  const { id } = match.params;
  console.log(ticket);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!ticket || !ticket.id) {
      dispatch(fetchTicketDetails({
        ticketId: id,
      }));
    }
    const localTicket = localStorage.getItem('ticket');
    setTicket(JSON.parse(localTicket));
    console.log('Dispatched Ticket', ticket);
    console.log(id);
  }, []);

  return (
    <div className="d-flex">
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
        <h3>TICKET DETAILS</h3>
        {ticket && (
          <div>
            {/* {localStorage.getItem('ticket')} */}
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Airline Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">City</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody className={TicketDetailsStyles.ticketDetails}>
                <tr>
                  <th scope="row">{ticket.airline_name}</th>
                  <td>{ticket.username}</td>
                  <td>{ticket.city}</td>
                  <td>{ticket.date}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

TicketDetails.propTypes = {
  ticket: PropTypes.shape({
    airline_name: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  ticket: state.ticket.ticket,
});

export default connect(mapStateToProps, null)(TicketDetails);
