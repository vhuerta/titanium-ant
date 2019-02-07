import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Input = ({ children, className, modifiers, ...props }) => {
  const classNames = _generateClasses(['input', ...modifiers]);

  return <input className={classnames(classNames, className)} {...props} />;
};

Input.propTypes = {
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Input.defaultProps = {
  modifiers: []
};

export default Input;
