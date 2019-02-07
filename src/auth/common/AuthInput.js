import React from 'react';
import { Input } from 'common/form';

const AuthInput = ({ ...props }) => {
  return <Input modifiers={['is-medium']} {...props} />;
};

export default AuthInput;
