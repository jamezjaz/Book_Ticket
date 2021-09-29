import React from 'react';
import { Link } from 'react-router-dom';
import HomeStyles from '../styles/HomeStyles.module.css';

const Home = () => {
  const speak = msg => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  };
  speak('Hello There, '
  + 'You are welcome to Air Tickets! '
  + 'Please, go ahead and signup. Login instead, if you already have an account.');

  return (
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
};

export default Home;
