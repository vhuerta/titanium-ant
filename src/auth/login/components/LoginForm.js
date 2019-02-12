import React, { Fragment } from 'react';
import get from 'lodash.get';
import { withRouter } from 'react-router-dom';

import LoginFormTitle from './LoginFormTitle';
import LoginFormLogo from './LoginFormLogo';
import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import LoginFormLinkSignUp from './LoginFormLinkSignUp';
import LoginFormLinkForgotPassword from './LoginFormLinkForgotPassword';

import { useInput } from 'helpers/hooksHelpers';
import { parseError } from 'helpers/componentsHelpers';

import Styles from 'auth/login/components/LoginForm.module.scss';

const LoginForm = ({ login, setCurrentUser, loading, error, history }) => {
  const email = useInput('');
  const password = useInput('');
  const err = parseError(error);

  async function handleSubmit(e) {
    e.preventDefault();
    const variables = { email: email.value, password: password.value };
    const result = await login({ variables });
    if (result) {
      const { id, user, token } = result.data.login;
      await setCurrentUser({ variables: { id, user, token } });
      history.push('/');
    }
  }

  return (
    <Fragment>
      <LoginFormLogo />
      <LoginFormTitle />
      <form className={Styles.form} onSubmit={handleSubmit} noValidate>
        <LoginFormInput
          autoFocus
          error={get(err, 'fields.email.path')}
          iconClassName="fas fa-envelope"
          label="login.email"
          onChange={email.onChange}
          type="email"
          value={email.value}
        />
        <LoginFormInput
          autoFocus
          error={get(err, 'fields.password.path')}
          iconClassName="fas fa-lock"
          label="login.password"
          onChange={password.onChange}
          type="password"
          value={password.value}
        />
        <LoginFormSubmit loading={loading} />
        <LoginFormLinkSignUp />
        <LoginFormLinkForgotPassword />
      </form>
    </Fragment>
  );
};

export default withRouter(LoginForm);
