import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketDetails from '../components/TicketDetails';

const Tickets = props => {
  const { tickets } = props;
  return (
    <div>
      {tickets.map(ticket => (
        <TicketDetails key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    ticket: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, null)(Tickets);
