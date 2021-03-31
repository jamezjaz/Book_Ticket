import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Ticket = props => {
  const { ticket } = props;

  return (
    <div className="container-fluid">
      <div className="border m-4">
        <h3>{ticket.airline_name}</h3>
        <h3>{ticket.username}</h3>
        <h3>{ticket.city}</h3>
        <h3>{ticket.date}</h3>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    airline_name: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default Ticket;
