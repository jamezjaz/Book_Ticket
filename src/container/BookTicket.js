import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import bookTicket from '../apiRequests/bookTicketRequest';
import fetchTickets from '../apiRequests/getTicketRequest';
// import SideNav from '../components/SideNav';
import BookTicketStyles from '../styles/BookTicketStyles.module.css';
// import DropDown from '../components/DropDown';

const BookTicket = props => {
  // const { ticket } = props;
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

  const redirectToTicketDetails = ticketId => {
    const { history } = props;
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
    dispatch(bookTicket(newTicket, redirectToTicketDetails));
  };

  // useEffect(() => {
  //   console.log(ticket);
  //   if (ticket.id) {
  //     localStorage.setItem('ticket', JSON.stringify(ticket));
  //     // redirectToTicketDetails(ticket.id);
  //   }
  // }, [ticket]);

  useEffect(() => {
    dispatch(fetchTickets(tickets));
  }, []);

  return (
    <div className="d-flex container-fluid">
      {/* <div className="col-2 d-none d-md-flex border min-vh-100 px-0">
        <SideNav />
      </div> */}
      <div className="col-10 px-0">
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
  history: PropTypes.instanceOf(Object).isRequired,
  // ticket: PropTypes.instanceOf(Object).isRequired,
  // airline: PropTypes.instanceOf(Object).isRequired,
  // airlines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string,
  //   }),
  // }).isRequired,
};

const mapStateToProps = state => ({
  ticket: state.ticket.ticket,
});

export default connect(mapStateToProps, null)(withRouter(BookTicket));
