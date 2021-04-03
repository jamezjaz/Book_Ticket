import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';
import BookTicketStyles from '../styles/BookTicketStyles.module.css';
// import fetchTickets from '../apiRequests/getTicketRequest';

const BookTicket = props => {
  const { ticketss, ticket } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const tickets = useSelector(state => state.ticket.tickets);
  const [userId, setUserId] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());

  // const ticketId = parseInt(match.params.id, 10);
  // const ticketId = (match.params.id);
  // const { id } = userParams();
  // console.log('TICKET ID', ticketId);

  const handleChange = event => {
    if (event.target.name === 'airlineName') {
      setAirlineName(event.target.value);
    } else if (event.target.name === 'username') {
      setUserName(event.target.value);
    } else if (event.target.name === 'location') {
      setLocation(event.target.value);
    } else {
      setUserId(user.id);
    }
  };

  const handleDate = date => {
    setDate(date);
  };

  const redirectToTicketDetails = ticketId => {
    const { history } = props;
    // history.push('/ticketDetails/:id');
    history.push(`/ticketDetails/${ticketId}`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newTicket = {
      airline_name: airlineName,
      username: userName,
      city: location,
      date,
      user_id: userId,
    };
    dispatch(bookTicket(newTicket));
    // console.log(ticketss, ticket);
    // handleTicketDetails();
  };

  useEffect(() => {
    console.log(ticketss, ticket);
    if (ticket.id) {
      localStorage.setItem('ticket', JSON.stringify(ticket));
      redirectToTicketDetails(ticket.id);
      // history.push('/ticketDetails/:id');
    }
  }, [ticket]);

  useEffect(() => {
    dispatch(fetchTickets(tickets));
  }, []);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border min-vh-100 px-0">
        <SideNav />
      </div>
      <div className="col-10 px-0">
        <Dropdown className="d-flex d-md-none mb-5">
          <Dropdown.Toggle className="bg-white" id="dropdown-basic">
            <img src={menu} alt="menu" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/airlinesList" active>AIRLINES</Dropdown.Item>
            <Dropdown.Item href="/tickets">TICKETS</Dropdown.Item>
            <Dropdown.Item href="/tickets">LogOut</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h5>Please, re-confirm these details!</h5>
        <form>
          <label htmlFor="airlineName" className="text-left">
            Name Of Airline:
            <br />
            <input type="text" name="airlineName" id="airlineName" onChange={event => handleChange(event)} />
          </label>
          <br />
          <label htmlFor="username" className="text-left">
            Username:
            <br />
            <input type="text" name="username" id="username" onChange={event => handleChange(event)} />
          </label>
          <br />
          <label htmlFor="location" className="text-left">
            Location:
            <br />
            <input type="text" name="location" id="location" onChange={event => handleChange(event)} />
          </label>
          <br />
          <label htmlFor="date" className="text-left">
            Date:
            <br />
            <DatePicker
              name="date"
              type="date"
              id="date"
              selected={date}
              onChange={handleDate}
            />
            <input id="date" hidden />
          </label>
          <br />
          <div className="text-center">
            <button type="submit" className={`${BookTicketStyles.createTicket} btn`} onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

BookTicket.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.instanceOf(Object).isRequired,
  ticketss: PropTypes.arrayOf(PropTypes.any).isRequired,
  // eslint-disable-next-line
  ticket: PropTypes.any.isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string,
  //   }),
  // }).isRequired,
};

const mapStateToProps = state => ({
  ticketss: state.ticket.tickets,
  ticket: state.ticket.ticket,
});

export default connect(mapStateToProps, null)(withRouter(BookTicket));
