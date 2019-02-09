import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { VerifyToken } from 'secured/helpers';
import Dashboard from 'secured/dashboard/Dashboard';

function SecuredRoutes() {
  return (
    <Switch>
      <Route path="/" component={VerifyToken(Dashboard)} />
      <Redirect to="/" />
    </Switch>
  );
}

export default SecuredRoutes;
