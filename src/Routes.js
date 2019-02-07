import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthRoutes, IsLoggedIn } from 'auth/index';
import Dashboard from 'dashboard/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/" component={IsLoggedIn(Dashboard)} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
