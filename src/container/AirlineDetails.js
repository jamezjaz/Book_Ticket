import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AirlineDetails = ({ airlines, match }) => {
  const airlineId = match.params.id;
  return (
    <div>
      {airlines.filter(airline => airline.id === airlineId).map(airline => (
        <div key={airline.id}>
          <h4>{airline.name}</h4>
          <p>{airline.price}</p>
          <p>{airline.location}</p>
        </div>
      ))}
    </div>
  );
};

AirlineDetails.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  airlines: state.airline.airlines,
});

export default connect(mapStateToProps, null)(AirlineDetails);
