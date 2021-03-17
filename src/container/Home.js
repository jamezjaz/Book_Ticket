import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';

const Home = () => (
  <div>
    <Link to="/login">
      <button type="button">Login</button>
    </Link>
    <Link to="/register">
      <button type="button">Register</button>
    </Link>
    <SideNav />
  </div>
);

export default Home;
