import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Field = ({ children, modifiers, className, ...props }) => {
  const classNames = _generateClasses(['field', ...modifiers]);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

Field.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Field.defaultProps = {
  modifiers: []
};

export default Field;
