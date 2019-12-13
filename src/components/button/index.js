import PropTypes from 'prop-types';
import React from 'react';

import styles from './button.module.css';

export const Button = ({ text }) => (
  <button type="button" className={styles.button}>
    {text}
  </button>
)

export const ButtonLink = ({ text, href }) => (
  <a
    href={href}
    className={styles.button}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
)

Button.propTypes = {
  text: PropTypes.string,
}

ButtonLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  text: "Button",
}

ButtonLink.defaultProps = {
  text: "Link",
  href: "",
}
