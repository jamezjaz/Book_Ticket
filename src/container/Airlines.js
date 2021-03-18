import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAirlines from '../apiRequests/getRequest';

const Airlines = props => {
  const { airlines } = props;
  useEffect(() => {
    const { fetchedAirlines } = props;
    fetchedAirlines(airlines);
  }, []);

  return (
    <>
      <h1>List Of Trending Airlines</h1>
    </>
  );
};

Airlines.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchedAirlines: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  airlines: state.airline.airlines,
});

const mapDispatchToprops = dispatch => ({
  fetchedAirlines: airlines => dispatch(fetchAirlines(airlines)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Airlines);
