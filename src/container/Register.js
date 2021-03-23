import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import registration from '../apiRequests/regRequest';

const Register = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
    // console.log(event.target);
  };

  const handleRegister = () => {
    const { history } = props;
    history.push('/airlinesList');
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Initial User', user);
    dispatch(registration({
      name,
      email,
      password,
    }));
    handleRegister();
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} value={name.name} />
        </label>
        <br />
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
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
