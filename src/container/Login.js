import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import login from '../apiRequests/loginRequest';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = () => {
    const { history } = props;
    history.push('/airlinesList');
  };

  const handleChange = event => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
    // console.log(event.target);
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
      handleLogin();
    } else {
      setErrorMsg('Please, enter correct credentials!');
    }
    console.log(user);
  };

  const validateForm = () => {
    const x = document.forms.myForm.name.value;
    if (x === '') {
      alert('All fields must be filled out');
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      <Link className="d-flex justify-content-end" to="/">
        <button type="button">Home</button>
      </Link>
      <form name="myForm" onSubmit={validateForm}>
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
        <button type="submit" onClick={handleSubmit}>Login</button>
        <div>
          <span>Don&apos;t have an account? </span>
          <Link to="/register">Register</Link>
        </div>
        {errorMsg === '' ? '' : <h3 className="text-danger">{errorMsg}</h3>}
      </form>
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToprops = dispatch => ({
  signIn: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToprops)(Login);
