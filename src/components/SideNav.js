import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import logout from '../apiRequests/logoutRequest';
import logo from '../assets/paper-airplane.png';
import SideNavStyles from '../styles/SideNavStyles.module.css';

const SideNav = props => {
  const handleHome = () => {
    const { history } = props;
    history.push('/');
  };

  const handleLogout = () => {
    const { signOut, user, loginStatus } = props;
    signOut();
    handleHome();
    console.log(user);
    console.log(loginStatus);
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
  signOut: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  loginStatus: PropTypes.bool,
  history: PropTypes.instanceOf(Object),
};

SideNav.defaultProps = {
  loginStatus: null,
  history: {},
};

const mapStateToProps = state => ({
  user: state.user,
  loginStatus: state.loginStatus,
});

const mapDispatchToprops = dispatch => ({
  signOut: user => dispatch(logout(user)),
});

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(SideNav));
