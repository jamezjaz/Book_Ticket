import React from 'react';
import PropTypes from 'prop-types';

const Airline = props => {
  const { airline } = props;
  return (
    <>
      <div>{airline.image}</div>
      <h4>{airline.name}</h4>
      <h5>{airline.price}</h5>
      <p>{airline.location}</p>
    </>
  );
};

Airline.propTypes = {
  airline: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Airline;
