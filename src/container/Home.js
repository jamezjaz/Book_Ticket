import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/login">
      <button type="button">Login</button>
    </Link>
    <Link to="/register">
      <button type="button">Register</button>
    </Link>
  </div>
);

export default Home;
