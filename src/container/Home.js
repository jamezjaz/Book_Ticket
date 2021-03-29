import React from 'react';
import { Link } from 'react-router-dom';
import HomeStyles from '../styles/HomeStyles.module.css';

const Home = () => (
  <div className={HomeStyles.home}>
    <h1 className={HomeStyles.heading}>BOOKING AIR TICKETS MADE EASY</h1>
    <div>
      <Link to="/login" className={HomeStyles.leftBtn}>
        <button type="button" className={`${HomeStyles.btn} btn`}>Login</button>
      </Link>
      <Link to="/register" className={HomeStyles.rightBtn}>
        <button type="button" className={`${HomeStyles.btn} btn`}>Register</button>
      </Link>
    </div>
  </div>
);

export default Home;
