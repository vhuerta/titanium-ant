import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses({ ...Styles });

const Container = ({ children, className, modifiers, ...props }) => {
  const classNames = _generateClasses(['container', ...modifiers]);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Container.defaultProps = {
  modifiers: []
};

export default Container;
