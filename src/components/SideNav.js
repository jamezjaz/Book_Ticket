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
      <div className={SideNavStyles.links}>
        <NavLink to="/airlinesList">AIRLINES</NavLink>
        <NavLink to="/tickets">TICKETS</NavLink>
      </div>
      <button type="submit" className={SideNavStyles.logout} onClick={handleLogout}>Logout</button>
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
