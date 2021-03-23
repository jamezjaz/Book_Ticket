import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AirlineDetailsStyles from '../styles/AirlineDetailsStyles.module.css';
import SideNav from '../components/SideNav';

const AirlineDetails = ({ airlines, match }) => {
  const airlineId = parseInt(match.params.id, 10);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      <div className="col-10 px-0">
        {airlines.filter(airline => airline.id === airlineId).map(airline => (
          <div key={airline.id} className={AirlineDetailsStyles.details}>
            <img src={airline.image.url} className={AirlineDetailsStyles.img} alt={airline.name} />
            <div className={AirlineDetailsStyles.data}>
              <h4>{airline.name}</h4>
              <p>{`$ ${airline.price}`}</p>
              <span>{airline.description}</span>
              <p>{airline.location}</p>
            </div>
          </div>
        ))}
      </div>
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
