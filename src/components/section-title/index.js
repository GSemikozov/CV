import PropTypes from 'prop-types';
import React from 'react';

import styles from './sectionTitle.module.css';

export const SectionTitle = ({ title }) => (
  <h3 className={styles.sectionTitle}>{title}</h3>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
}

SectionTitle.defaultProps = {
  title: ``,
}
