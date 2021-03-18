import React from 'react';
import PropTypes from 'prop-types';

const Airline = props => {
  const { airline } = props;
  return (
    <>
      <h3>
        {airline.name}
      </h3>
    </>
  );
};

Airline.propTypes = {
  airline: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Airline;
