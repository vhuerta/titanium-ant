import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styles from 'common/bulma.module.scss';

import { generateClasses } from 'helpers/componentsHelpers';

const _generateClasses = generateClasses(Styles);

const HeroBody = ({ children, className, modifiers, ...props }) => {

  const classNames = _generateClasses(['hero-body', ...modifiers]);

  return (
    <div className={classnames(classNames, className)} {...props}>
      {children}
    </div>
  );
};

HeroBody.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  modifiers: PropTypes.array
};

HeroBody.defaultProps = {
  modifiers: []
};

export default HeroBody;
