import React from 'react';
import { NamespacesConsumer } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Control, Field } from 'common/form';
import Bulma from 'common/bulma.module.scss';

function LoginFormLinkSignUp() {
  return (
    <NamespacesConsumer>
      {t => (
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
      )}
    </NamespacesConsumer>
  );
}

export default LoginFormLinkSignUp;
