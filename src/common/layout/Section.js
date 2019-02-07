import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const Section = ({ children, className, modifiers, ...props }) => {
  const classNames = _generateClasses(['section', ...modifiers]);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

Section.defaultProps = {
  modifiers: []
};

export default Section;
