import React from 'react';
import Logo from 'assets/logo.png';
import { NamespacesConsumer } from 'react-i18next';

import Styles from 'auth/login/components/LoginForm.module.scss';

function LoginFormLogo() {
  return (
    <NamespacesConsumer>
      {t => <img className={Styles.logo} src={Logo} alt="Bienvenido" />}
    </NamespacesConsumer>
  );
}

export default LoginFormLogo;
