import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Loader from 'react-loader-spinner';
import fetchAirlines from '../apiRequests/getAirlineRequest';
import Airline from '../components/Airline';
import responsive from '../constants/respCarousel';
import '../styles/AliceCarousel.css';
import SideNav from '../components/SideNav';
import AirlinesListStyles from '../styles/AirlinesListStyles.module.css';
import DropDown from '../components/DropDown';

const AirlinesList = props => {
  const [loading, setLoading] = useState(true);
  const { airlines } = props;

  useEffect(() => {
    const { fetchedAirlines } = props;
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    fetchedAirlines(airlines);
  }, []);

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border px-0">
        <SideNav />
      </div>
      {loading === true
        ? (
          <Loader
            type="Rings"
            color="#97BF0F"
            height={150}
            width={150}
            timeout={6000}
            className={AirlinesListStyles.spinner}
          />
        )
        : (
          <div className="col-10 px-0">
            <DropDown />
            <div className="m-2">
              <h3 className={AirlinesListStyles.heading}>TRENDING AIRLINES</h3>
              <h6 className={AirlinesListStyles.para}>Please, select an airline</h6>
              <small>...........................</small>
            </div>
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
        )}
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
