import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Control = ({ children, modifiers, className, ...props }) => {
  const classNames = _generateClasses(['control', ...modifiers]);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

Control.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Control.defaultProps = {
  modifiers: []
};

export default Control;
