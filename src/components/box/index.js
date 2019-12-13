import React from 'react';

import styles from './sectionBox.module.css';

export const Box = ({ children }) => (
  <div className={styles.sectionBox}>{children}</div>
)
