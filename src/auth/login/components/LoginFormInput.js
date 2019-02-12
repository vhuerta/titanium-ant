import React from 'react';
import Proptypes from 'prop-types';
import { NamespacesConsumer } from 'react-i18next';

import { Icon, Help } from 'common/elements';
import { Control, Field, Input } from 'common/form';

import Styles from 'auth/login/components/LoginForm.module.scss';


function LoginFormInput({
  autoFocus,
  error,
  iconClassName,
  label,
  onChange,
  type = 'text',
  value
}) {
  return (
    <NamespacesConsumer>
      {t => (
        <Field>
          <Control modifiers={['has-icons-left']}>
            <Input
              modifiers={['is-medium']}
              className={Styles.input}
              autoFocus={autoFocus}
              type={type}
              placeholder={t(label)}
              value={value}
              onChange={onChange}
            />
            <Icon className={Styles.icon} modifiers={['is-small', 'is-left']}>
              <i className={iconClassName} />
            </Icon>
            <Help modifiers={['is-danger']}>
              {t(error)}
              &nbsp;
            </Help>
          </Control>
        </Field>
      )}
    </NamespacesConsumer>
  );
}

LoginFormInput.propTypes = {
  autoFocus    : Proptypes.bool,
  error        : Proptypes.string,
  iconClassName: Proptypes.string.isRequired,
  label        : Proptypes.string.isRequired,
  onChange     : Proptypes.func.isRequired,
  type         : Proptypes.string,
  value        : Proptypes.string.isRequired
};

export default LoginFormInput;
