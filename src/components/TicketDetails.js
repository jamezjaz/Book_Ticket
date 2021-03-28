import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import fetchTickets from '../apiRequests/getTicketRequest';

const TicketDetails = props => {
  const { tickets } = props;
  console.log(typeof (tickets));

  // useEffect(() => {
  //   const { fetchedTickets } = props;
  //   fetchedTickets(tickets);
  // }, []);

  return (
    <>
      <div>
        {tickets.map(t => (
          <div key={t.id}>
            <h3>{t.airline_name}</h3>
            <h4>{t.username}</h4>
            <p>{t.city}</p>
            <p>{t.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

TicketDetails.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    airlineName: PropTypes.string,
    userName: PropTypes.string,
  })).isRequired,
  // fetchedTickets: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
});

// const mapDispatchToprops = dispatch => ({
//   fetchedTickets: tickets => dispatch(fetchTickets(tickets)),
// });

export default connect(mapStateToProps, null)(TicketDetails);
