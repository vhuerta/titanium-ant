import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Help = ({ children, className, modifiers = [], ...props }) => {
  const classNames = _generateClasses(['help', ...modifiers]);

  return (
    <p className={classnames(classNames, className)} {...props}>
      {children}
    </p>
  );
};

Help.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Help.defaultProps = {
  modifiers: []
};

export default Help;
