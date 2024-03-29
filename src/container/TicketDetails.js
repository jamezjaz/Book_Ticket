import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import fetchTicketDetails from '../apiRequests/getTicketDetails';
import SideNav from '../components/SideNav';
import TicketDetailsStyles from '../styles/TicketDetailsStyles.module.css';
import deleteTicket from '../apiRequests/delTicketRequest';
import DropDown from '../components/DropDown';

const TicketDetails = props => {
  const { ticket, match } = props;
  const { id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTicketDetails({
      id,
    }));
  }, [id]);

  const handleDelTicket = ticket => {
    const { history } = props;
    localStorage.removeItem(ticket);
    dispatch(deleteTicket(ticket));
    history.push('/tickets');
  };

  const speak = msg => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  };
  speak(`Hello ${ticket.username}!, `
  + 'You\'ve successfully booked a ticket '
  + 'Thank you for your patronage, have fun, and enjoy!.');

  return (
    <div className="d-flex">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      <div className="col-10">
        <DropDown />
        <h3>TICKET DETAILS</h3>
        {ticket && (
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Airline Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">City</th>
                  <th scope="col">Date</th>
                  <th scope="col">Cancel Ticket</th>
                </tr>
              </thead>
              <tbody className={TicketDetailsStyles.ticketDetails}>
                <tr>
                  <th scope="row">{ticket.airline_name}</th>
                  <td>{ticket.username}</td>
                  <td>{ticket.city}</td>
                  <td>{format(new Date(ticket.date), 'MM/dd/yyyy')}</td>
                  <td>
                    <button type="button" className={`${TicketDetailsStyles.btn} btn`} onClick={() => handleDelTicket(ticket)}>Delete Ticket</button>
                  </td>
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
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  ticket: state.ticket.ticket,
  airline: state.airline.airline,
});

export default connect(mapStateToProps, null)(TicketDetails);
