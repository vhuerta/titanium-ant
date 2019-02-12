import React from 'react';
import PropTypes from 'prop-types';
import { NamespacesConsumer } from 'react-i18next';

import { Button, Control, Field } from 'common/form';

const LoginFormSubmit = ({ loading }) => {
  return (
    <NamespacesConsumer>
      {t => (
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
      )}
    </NamespacesConsumer>
  );
};

LoginFormSubmit.propTypes = {
  loading: PropTypes.bool
};

export default LoginFormSubmit;
