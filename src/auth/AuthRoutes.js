import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Styles from 'auth/AuthRoutes.module.scss';
import { Hero, HeroBody, Container } from 'common/layout';
import LoginContainer from 'auth/login/containers/LoginContainer';

const AuthRoutes = () => {
  return (
    <Hero className={Styles.auth} modifiers={['is-fullheight']}>
      <HeroBody>
        <Container modifiers={['flex-center', 'flex-column']}>
          <Switch>
            <Route path="/auth/login" component={LoginContainer} />
            <Redirect to="/auth/login" />
          </Switch>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default AuthRoutes;
