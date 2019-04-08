import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './components/homepage';
import Events from './components/events/events';
import Eventsolo from './components/events/event';
import AddNewEvent from './components/events/addnewevent';
import EditAnEvent from './components/events/editanevent';
import DeleteAnEvent from './components/events/deleteanevent';
import PastEvents from './components/events/pastevents';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Team from './components/pages/team';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/events/page=:page" component={Events} />
    <Route exact path="/event/:id" component={Eventsolo} />
    <Route exact path="/addnewevent" component={AddNewEvent} />
    <Route exact path="/editanevent/:id" component={EditAnEvent} />
    <Route exact path="/deleteanevent/:id" component={DeleteAnEvent} />
    <Route exact path="/team" component={Team}  />

    <Route exact path="/pastevents/page=:page" component={PastEvents} />


    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </Switch>
)

export default Routes
