import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import login from '../apiRequests/loginRequest';
import LoginStyles from '../styles/LoginStyles.module.css';

const Login = props => {
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = event => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { signIn } = props;
    const user = {
      email,
      password,
    };
    if (email || password !== '') {
      setErrorMsg('');
      signIn(user);
    } else {
      setErrorMsg('Please, enter correct credentials!');
    }
  };

  const validateForm = () => {
    const x = document.forms.myForm.name.value;
    if (x === '') {
      // eslint-disable-next-line
      alert('All fields must be filled out');
      return false;
    }
    return true;
  };

  return (
    <>
      <form name="myForm" data-testid="form" className={LoginStyles.loginForm} onSubmit={validateForm}>
        <Link className={LoginStyles.homeLink} style={{ textDecoration: 'none' }} to="/">
          <button type="button" data-testid="home" className={`${LoginStyles.homeBtn} btn`}>Home</button>
        </Link>
        <h4>Login</h4>
        <label htmlFor="email" className="text-left">
          Email:
          <br />
          <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange} value={email.email} />
        </label>
        <br />
        <label htmlFor="password" className="text-left">
          Password:
          <br />
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} value={password.password} />
        </label>
        <br />
        <button type="submit" className={`${LoginStyles.btn} btn`} onClick={handleSubmit}>Login</button>
        <div>
          <span>Don&apos;t have an account? </span>
          <Link to="/register">Register</Link>
        </div>
        {errorMsg === '' ? '' : <h3 className="text-danger">{errorMsg}</h3>}
        {user.error === '' ? '' : <h3 className="text-danger">Incorrect email or password</h3>}
      </form>
    </>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToprops = dispatch => ({
  signIn: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToprops)(Login);
