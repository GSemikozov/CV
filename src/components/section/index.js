import React from 'react';

import styles from './section.module.css';

export const Section = ({ children, id }) => (
  <section className={styles.section} id={id ? id : ""}>
    {children}
  </section>
)
