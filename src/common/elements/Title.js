import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Title = ({ children, className, modifiers, priority, ...props }) => {
  const CustomTag = priority ? `h${priority}` : 'p';
  const classNames = _generateClasses(['title', ...modifiers]);

  return (
    <CustomTag className={classnames(classNames, className)} {...props}>
      {children}
    </CustomTag>
  );
};

Title.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array,
  priority : PropTypes.number
};

Title.defaultProps = {
  modifiers: []
};

export default Title;
