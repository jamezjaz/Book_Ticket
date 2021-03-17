import React from 'react';

const Login = () => (
  <div>
    <form>
      <label htmlFor="email">
        Email:
        <input type="text" name="email" id="email" placeholder="Enter your email" />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" placeholder="Enter your password" />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
