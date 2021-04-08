import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AirlineDetailsStyles from '../styles/AirlineDetailsStyles.module.css';
import SideNav from '../components/SideNav';
import DropDown from '../components/DropDown';
import BookTicket from './BookTicket';

const AirlineDetails = ({
  airlines,
  match,
}) => {
  const airlineId = parseInt(match.params.id, 10);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border min-vh-100 px-0">
        <SideNav />
      </div>
      <div className="col-10 px-0">
        <DropDown />
        {airlines.filter(airline => airline.id === airlineId).map(airline => (
          <div key={airline.id} className={AirlineDetailsStyles.details}>
            <img src={airline.image.url} className={AirlineDetailsStyles.img} alt={airline.name} />
            <div className={AirlineDetailsStyles.data}>
              <div className="mb-5">
                <h2 className={AirlineDetailsStyles.name}>{airline.name}</h2>
                <span>{airline.description}</span>
              </div>
              <BookTicket
                name={airline.name}
                precio={airline.price}
                city={airline.location}
                uId={airline.user_id}
                airId={airline.id}
              />
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
