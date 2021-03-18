import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logout from '../apiRequests/logoutRequest';

const SideNav = props => {
  const handleLogout = () => {
    const { signOut, user, loginStatus } = props;
    signOut();
    console.log(user);
    console.log(loginStatus);
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

SideNav.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  loginStatus: PropTypes.bool,
};

SideNav.defaultProps = {
  loginStatus: null,
};

const mapStateToProps = state => ({
  user: state.user,
  loginStatus: state.loginStatus,
});

const mapDispatchToprops = dispatch => ({
  signOut: user => dispatch(logout(user)),
});

export default connect(mapStateToProps, mapDispatchToprops)(SideNav);
