import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Airlines from './container/Airlines';
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/airlines" component={Airlines} />
    </Switch>
  </Router>
);

export default Routes;
