import React from 'react';

import { Title } from 'common/elements';
import { NamespacesConsumer } from 'react-i18next';

import Styles from 'auth/login/components/LoginForm.module.scss';

function LoginFormTitle() {
  return (
    <NamespacesConsumer>
      {t => (
        <Title
          className={Styles.title}
          modifiers={['is-4', 'has-text-light']}
          priority={1}
        >
          {t('login.title').toUpperCase()}
        </Title>
      )}
    </NamespacesConsumer>
  );
}

export default LoginFormTitle;
