import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AirlineDetails from './container/AirlineDetails';
import AirlinesList from './container/AirlinesList';
import BookTicket from './container/BookTicket';
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/airlinesList" component={AirlinesList} />
      <Route path="/airlineDetails/:id" component={AirlineDetails} />
      <Route path="/bookTicket" component={BookTicket} />
    </Switch>
  </Router>
);

export default Routes;
