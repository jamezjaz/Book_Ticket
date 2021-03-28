import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';
// import fetchTickets from '../apiRequests/getTicketRequest';
// import TicketDetails from '../components/TicketDetails';

const BookTicket = props => {
  // const dispatch = useDispatch();
  // eslint-disable-next-line
  const { user } = props;
  // console.log(typeof (tickets));
  const [userId, setUserId] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [userName, setUserName] = useState('');
  // const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChange = event => {
    if (event.target.name === 'airlineName') {
      setAirlineName(event.target.value);
    } else if (event.target.name === 'username') {
      setUserName(event.target.value);
    } else if (event.target.name === 'location') {
      setLocation(event.target.value);
    // } else if (event.target.name === 'price') {
    //   setPrice(event.target.value);
    } else {
      setUserId(user.id);
    }
  };

  const handleDate = date => {
    setDate(date);
    console.log(date);
  };

  const handleTicketDetails = () => {
    const { history } = props;
    history.push('/ticketDetails');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { bookedTickets } = props;
    console.log(user);
    const newTicket = {
      airline_name: airlineName,
      username: userName,
      city: location,
      date,
      user_id: userId,
    };
    bookedTickets(newTicket);
    console.log(newTicket);
    handleTicketDetails();
  };

  useEffect(() => {
    const { fetchedTickets } = props;
    fetchedTickets();
    // console.log(tickets);
  }, []);

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
      {/* {tickets.map(ticket => (
        <TicketDetails key={ticket.id} ticket={ticket} />
      ))} */}
    </div>
  );
};

BookTicket.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  bookedTickets: PropTypes.func.isRequired,
  fetchedTickets: PropTypes.func.isRequired,
  // tickets: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  user: state.user.user,
  // tickets: state.ticket.tickets,
});

const mapDispatchToprops = dispatch => ({
  bookedTickets: ticket => dispatch(bookTicket(ticket)),
  fetchedTickets: ticket => dispatch(fetchTickets(ticket)),
});

export default connect(mapStateToProps, mapDispatchToprops)(BookTicket);
