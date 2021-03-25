import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect, useDispatch } from 'react-redux';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';

const BookTicket = props => {
  const dispatch = useDispatch();
  const { user, tickets } = props;
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChange = event => {
    if (event.target.name === 'airlineName') {
      setAirlineName(event.target.value);
    } else if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'location') {
      setCity(event.target.value);
    } else if (event.target.name === 'price') {
      setPrice(event.target.value);
    } else {
      setUserId(user.id);
    }
  };

  const handleDate = date => {
    setDate(date);
    console.log(date);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const { bookedTickets } = props;
    console.log(user);
    const newTicket = {
      airlineName,
      username,
      price,
      city,
      userId,
    };
    dispatch(bookTicket(newTicket));
    console.log(newTicket);
  };

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets(tickets);
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="airlineName" className="text-left">
          Name Of Airline:
          <br />
          <input type="text" name="airlineName" id="airlineName" value={airlineName.airlineName} onChange={event => handleChange(event)} readOnly />
        </label>
        <br />
        <label htmlFor="username" className="text-left">
          Username:
          <br />
          <input type="text" name="username" id="username" value={username.username} onChange={event => handleChange(event)} readOnly />
        </label>
        <br />
        <label htmlFor="price" className="text-left">
          Price:
          <br />
          <input type="text" name="price" id="price" value={price.price} onChange={event => handleChange(event)} readOnly />
        </label>
        <br />
        <label htmlFor="location" className="text-left">
          Location:
          <br />
          <input type="text" name="location" id="location" value={city.city} onChange={event => handleChange(event)} readOnly />
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
          <input id="date" value={userId.userId} hidden />
        </label>
        <br />
        <div className="text-center">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

BookTicket.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  // bookedTickets: PropTypes.func.isRequired,
  fetchedTickets: PropTypes.func.isRequired,
  tickets: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  tickets: state.ticket.tickets,
});

const mapDispatchToprops = dispatch => ({
  // bookedTickets: ticket => dispatch(bookTicket(ticket)),
  fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
});

export default connect(mapStateToProps, mapDispatchToprops)(BookTicket);