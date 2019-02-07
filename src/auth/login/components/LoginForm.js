import React, { Fragment } from 'react';
import get from 'lodash.get';
import { Link, withRouter } from 'react-router-dom';
import { NamespacesConsumer } from 'react-i18next';

import { Title } from 'common/elements';
import Input from 'auth/common/AuthInput';
import { Icon, Help } from 'common/elements';
import { Button, Control, Field } from 'common/form';

import Bulma from 'common/bulma.module.scss';
import Styles from 'auth/login/components/LoginForm.module.scss';

import { useInput } from 'helpers/hooksHelpers';
import { parseError } from 'helpers/componentsHelpers';

const LoginForm = ({ login, setCurrentUser, loading, error, history }) => {
  const email = useInput('');
  const password = useInput('');
  const err = parseError(error);

  async function onSubmit(e) {
    e.preventDefault();
    const variables = { email: email.value, password: password.value };
    const loginResult = await login({ variables });
    if (loginResult) {
      const { id, user, token } = loginResult.data.login;
      await setCurrentUser({ variables: { id, user, token } });
      history.push('/');
    }
  }

  return (
    <NamespacesConsumer>
      {t => (
        <Fragment>
          <img
            className={Styles.logo}
            src={require('assets/logo.png')}
            alt="Bienvenido"
          />

          <Title
            className={Styles.title}
            modifiers={['is-4', 'has-text-light']}
            priority={1}
          >
            {t('login.title').toUpperCase()}
          </Title>

          <form className={Styles.form} onSubmit={onSubmit} noValidate>
            <Field>
              <Control modifiers={['has-icons-left']}>
                <Input
                  className={Styles.input}
                  autoFocus
                  type="email"
                  placeholder={'Correo Electrónico'}
                  {...email}
                />
                <Icon
                  className={Styles.icon}
                  modifiers={['is-small', 'is-left']}
                >
                  <i className="fas fa-envelope" />
                </Icon>
                <Help modifiers={['is-danger']}>
                  {t(get(err, 'fields.email.path'))}
                  &nbsp;
                </Help>
              </Control>
            </Field>
            <Field>
              <Control modifiers={['has-icons-left']}>
                <Input
                  className={Styles.input}
                  type="password"
                  placeholder={'Contraseña'}
                  {...password}
                />
                <Icon
                  className={Styles.icon}
                  modifiers={['is-small', 'is-left']}
                >
                  <i className="fas fa-lock" />
                </Icon>
                <Help modifiers={['is-danger']}>
                  {t(get(err, 'fields.password.path'))}
                  &nbsp;
                </Help>
              </Control>
            </Field>
            <Field>
              <Control>
                <Button
                  modifiers={[
                    'is-primary',
                    'is-fullwidth',
                    'is-medium',
                    loading && 'is-loading'
                  ]}
                >
                  {t('login.title')}
                </Button>
              </Control>
            </Field>
            <Field>
              <Control className={Bulma['is-clearfix']}>
                <Link
                  className={[
                    Bulma['is-pulled-left'],
                    Bulma['has-text-light']
                  ].join(' ')}
                  to={'/'}
                >
                  {t('login.forget')}
                </Link>
              </Control>
            </Field>
            <Field>
              <Control className={Bulma['is-clearfix']}>
                <Link
                  className={[
                    Bulma['is-pulled-left'],
                    Bulma['has-text-light']
                  ].join(' ')}
                  to={'/'}
                >
                  {t('login.register')}
                </Link>
              </Control>
            </Field>
          </form>
        </Fragment>
      )}
    </NamespacesConsumer>
  );
};

export default withRouter(LoginForm);
