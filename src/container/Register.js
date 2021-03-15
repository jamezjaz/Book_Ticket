import React from 'react';

const Register = () => (
  <div>
    <form>
      <label htmlFor="email">
        Email:
        <input type="text" name="email" id="email" placeholder="Enter your email" />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input type="text" name="password" id="password" placeholder="Enter your password" />
      </label>
      <br />
      <label htmlFor="password_confirmation">
        Password Confirmation:
        <input type="text" name="password_confirmation" placeholder="Enter your password confirm" />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
