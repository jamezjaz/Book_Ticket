import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';
import BookTicketStyles from '../styles/BookTicketStyles.module.css';

const BookTicket = props => {
  const {
    name,
    city,
    precio,
    uId,
    airId,
  } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { username } = user;

  const tickets = useSelector(state => state.ticket.tickets);
  const [airlineName, setAirlineName] = useState(name);
  const [price, setPrice] = useState(precio);
  const [userName, setUserName] = useState(username);
  const [location, setLocation] = useState(city);
  const [userId, setUserId] = useState(uId);
  const [airlineId, setAirlineId] = useState(airId);
  const [date, setDate] = useState(new Date());

  const handleChange = event => {
    if (event.target.name === 'airlineName') {
      setAirlineName(event.target.value);
    } else if (event.target.name === 'price') {
      setPrice(event.target.value);
    } else if (event.target.name === 'username') {
      setUserName(event.target.value);
    } else if (event.target.name === 'location') {
      setLocation(event.target.value);
    } else if (event.target.name === 'airlineId') {
      setAirlineId(event.target.value);
    } else {
      setUserId(uId);
    }
  };

  const handleDate = date => {
    setDate(date);
  };

  const redirectToTicketDetails = ticketId => {
    const { history } = props;
    history.push(`/ticketDetails/${ticketId}`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newTicket = {
      airline_name: airlineName,
      price,
      username: userName,
      city: location,
      date,
      user_id: userId,
      airline_id: airlineId,
    };
    dispatch(bookTicket(newTicket, redirectToTicketDetails));
  };

  useEffect(() => {
    dispatch(fetchTickets(tickets));
  }, []);

  return (
    <div className="d-flex container-fluid">
      <div className="col-10 px-0">
        <form>
          <label htmlFor="airlineName" className="text-left">
            Name Of Airline:
            <br />
            <input type="text" name="airlineName" id="airlineName" value={name} onChange={event => handleChange(event)} readOnly />
          </label>
          <br />
          <label htmlFor="price" className="text-left">
            Price:
            <br />
            <input type="text" name="price" id="price" value={`$ ${precio}`} onChange={event => handleChange(event)} readOnly />
          </label>
          <label htmlFor="username" className="text-left">
            Username:
            <br />
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={event => handleChange(event)}
            />
          </label>
          <br />
          <label htmlFor="location" className="text-left">
            Location:
            <br />
            <input type="text" name="location" id="location" value={city} onChange={event => handleChange(event)} readOnly />
          </label>
          <br />
          <label htmlFor="userId" className="text-left">
            <input type="text" name="userId" id="userId" value={uId} onChange={event => handleChange(event)} hidden />
          </label>
          <label htmlFor="airlineId" className="text-left">
            <input type="text" name="airlineId" id="airlineId" value={airId} onChange={event => handleChange(event)} hidden />
          </label>
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
  history: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  uId: PropTypes.number.isRequired,
  airId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ticket: state.ticket.ticket,
});

export default connect(mapStateToProps, null)(withRouter(BookTicket));
