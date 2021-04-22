import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../assets/paper-airplane.png';
import SideNavStyles from '../styles/SideNavStyles.module.css';

const SideNav = props => {
  const [loginStatus, setLoginStatus] = useState(true);

  const handleHome = () => {
    const { history } = props;
    history.push('/');
  };

  const handleLogout = () => {
    if (loginStatus === true) {
      setLoginStatus({
        loginStatus: false,
      });
      handleHome();
    }
  };

  return (
    <div className="container-fluid">
      <button type="button" className="rounded border-0">
        <img src={logo} alt="logo" />
      </button>
      <div className={`${SideNavStyles.links} links`}>
        <NavLink to="/airlinesList" className={SideNavStyles.active}>AIRLINES</NavLink>
        <NavLink to="/tickets" className={SideNavStyles.active}>TICKETS</NavLink>
      </div>
      <div>
        <button type="submit" className={`${SideNavStyles.logout} btn`} onClick={handleLogout}>LogOut</button>
      </div>
      <p className={SideNavStyles.icons}>
        <img src="https://img.icons8.com/android/24/000000/twitter.png" className="px-2" alt="twitter" />
        <img src="https://img.icons8.com/android/24/000000/facebook-new.png" className="px-2" alt="fb" />
        <img src="https://img.icons8.com/android/24/000000/google-plus.png" className="px-2" alt="google" />
        <img src="https://img.icons8.com/material/24/000000/vimeo.png" className="px-2" alt="vimeo" />
        <img src="https://img.icons8.com/metro/24/000000/pinterest.png" className="px-2" alt="pinterest" />
      </p>
    </div>
  );
};

SideNav.propTypes = {
  history: PropTypes.instanceOf(Object),
};

SideNav.defaultProps = {
  history: {},
};

const mapStateToProps = state => ({
  user: state.user,
  loginStatus: state.loginStatus,
});

export default connect(mapStateToProps, null)(withRouter(SideNav));
