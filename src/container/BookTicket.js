import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import bookTicket from '../apiRequests/bookTicketRequest';

const BookTicket = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
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

  return (
    <div>
      <form>
        <label htmlFor="airlineName" className="text-left">
          Name Of Airline:
          <br />
          <input type="text" name="airlineName" id="airlineName" value={airlineName.airlineName} onChange={event => handleChange(event)} />
        </label>
        <br />
        <label htmlFor="username" className="text-left">
          Username:
          <br />
          <input type="text" name="username" id="username" value={userName.userName} onChange={event => handleChange(event)} />
        </label>
        <br />
        <label htmlFor="location" className="text-left">
          Location:
          <br />
          <input type="text" name="location" id="location" value={location.location} onChange={event => handleChange(event)} />
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
  history: PropTypes.instanceOf(Object).isRequired,
};

export default BookTicket;
