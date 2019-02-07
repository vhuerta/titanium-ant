import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Button = ({ children, className, isLink, modifiers = [], ...props }) => {
  const CustomTag = isLink ? 'a' : 'button';
  const classNames = _generateClasses(['button', ...modifiers]);

  return (
    <CustomTag className={classnames(classNames, className)} {...props}>
      {children}
    </CustomTag>
  );
};

Button.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Button.defaultProps = {
  modifiers: []
};

export default Button;
