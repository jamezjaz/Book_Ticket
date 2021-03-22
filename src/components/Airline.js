import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Airline = props => {
  const { airline } = props;
  const uniqueKey = airline.id;
  return (
    <>
      <Link to={`/airlineDetails/${uniqueKey}`}>
        <div>
          <img src={airline.image.url} alt={airline.name} />
          <h4>{airline.name}</h4>
          <h5>{airline.price}</h5>
          <p>{airline.location}</p>
        </div>
      </Link>
    </>
  );
};

Airline.propTypes = {
  airline: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.instanceOf(Object),
    id: PropTypes.number,
  }).isRequired,
};

export default Airline;
