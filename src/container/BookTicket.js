import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';
// import fetchTickets from '../apiRequests/getTicketRequest';

const BookTicket = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const tickets = useSelector(state => state.ticket.tickets);
  const [userId, setUserId] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());

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

  const handleTicketDetails = () => {
    const { history } = props;
    history.push('/tickets');
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
    handleTicketDetails();
  };

  useEffect(() => {
    dispatch(fetchTickets(tickets));
  }, []);

  return (
    <div>
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
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

BookTicket.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default BookTicket;
