import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage';
import Events from './events';
import Event from './event';
import Team from './team';
import Contact from './contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/event" component={Event} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Routes
