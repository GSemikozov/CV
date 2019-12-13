import cx from 'classnames';
import React from 'react';

import styles from './container.module.css';

export const Container = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
)
