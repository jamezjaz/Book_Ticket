import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import fetchAirlines from '../apiRequests/getRequest';
import Airline from '../components/Airline';
import responsive from '../constants/respCarousel';
import '../styles/AliceCarousel.css';
import SideNav from '../components/SideNav';

const AirlinesList = props => {
  const { airlines } = props;
  useEffect(() => {
    const { fetchedAirlines } = props;
    fetchedAirlines(airlines);
  }, []);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      <div className="col-10 px-0">
        <h1>List Of Trending Airlines</h1>
        <AliceCarousel
          responsive={responsive}
          autoPlayInterval={3200}
          autoPlayDirection="ltr"
          autoPlay
          fadeOutAnimation
          mouseTrackingEnabled
          disableAutoPlayOnAction
          dotsDisabled
          infinite
        >
          {airlines.map(airline => (
            <Airline key={airline.id} airline={airline} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

AirlinesList.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchedAirlines: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  airlines: state.airline.airlines,
});

const mapDispatchToprops = dispatch => ({
  fetchedAirlines: airlines => dispatch(fetchAirlines(airlines)),
});

export default connect(mapStateToProps, mapDispatchToprops)(AirlinesList);
