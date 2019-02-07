import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Delete = ({ children, className, ...props }) => {
  const classNames = _generateClasses(['delete']);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

Delete.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any
};

Delete.defaultProps = {
  modifiers: []
};

export default Delete;
