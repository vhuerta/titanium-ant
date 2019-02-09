import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthRoutes, IsLoggedIn } from 'auth';
import { SecuredRoutes } from 'secured';

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/" component={IsLoggedIn(SecuredRoutes)} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
