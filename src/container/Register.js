import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Register = () => {
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleChange = event => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setPasswordConfirmation(event.target.value);
    }
    // console.log(event.target);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Initial User', user);
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
        <label htmlFor="password_confirmation">
          Password Confirmation:
          <input type="password" name="password_confirmation" placeholder="Enter your password confirm" onChange={handleChange} value={passwordConfirmation.password_confirmation} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;
