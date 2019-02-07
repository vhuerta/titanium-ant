import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Icon = ({ children, className, modifiers = [], ...props }) => {
  const classNames = _generateClasses(['icon', ...modifiers]);

  return (
    <span className={classnames(classNames, className)} {...props}>
      {children}
    </span>
  );
};

Icon.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Icon.defaultProps = {
  modifiers: []
};

export default Icon;
