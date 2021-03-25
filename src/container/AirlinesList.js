import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Dropdown } from 'react-bootstrap';
import fetchAirlines from '../apiRequests/getAirlineRequest';
import Airline from '../components/Airline';
import responsive from '../constants/respCarousel';
import '../styles/AliceCarousel.css';
import SideNav from '../components/SideNav';
import menu from '../assets/hamburger-menu.png';

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
        <Dropdown className="d-flex d-md-none mb-5">
          <Dropdown.Toggle className="bg-white" id="dropdown-basic">
            <img src={menu} alt="menu" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/airlinesList" active>AIRLINES</Dropdown.Item>
            <Dropdown.Item href="/tickets">TICKETS</Dropdown.Item>
            <Dropdown.Item href="/others">OTHERS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1 className="mt-5">Trending Airlines</h1>
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
