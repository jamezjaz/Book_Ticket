import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      setErrorMsg('Please, enter correct credentials');
    }
    console.log(user);
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange} value={email.email} />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} value={password.password} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Login</button>
        {errorMsg === '' ? '' : <h3>{errorMsg}</h3>}
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
