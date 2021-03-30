import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import AirlineStyles from '../styles/AirlineStyles.module.css';

const Airline = props => {
  const { airline } = props;
  const uniqueKey = airline.id;
  return (
    <>
      <Link to={`/airlineDetails/${uniqueKey}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '18rem' }} className={AirlineStyles.card}>
          <Card.Img variant="top" src={airline.image.url} className="card-img-top rounded-circle" alt={airline.name} />
          <Card.Body>
            <Card.Title className={AirlineStyles.name}>{airline.name}</Card.Title>
            <Card.Text>{`$ ${airline.price}`}</Card.Text>
            <Card.Text>{airline.location}</Card.Text>
          </Card.Body>
          <p className="d-flex justify-content-center">
            <img src="https://img.icons8.com/dotty/50/A6A6A6/facebook-circled.png" alt="facebook" />
            <img src="https://img.icons8.com/dotty/50/A6A6A6/twitter-circled.png" alt="twitter" />
            <img src="https://img.icons8.com/dotty/50/A6A6A6/google-plus.png" alt="google" />
          </p>
        </Card>
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
