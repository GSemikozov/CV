import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '../container';
import styles from './header.module.css';
import heroBanner from './hero-banner/hero-banner.jpg';

export const Header = ({ siteTitle }) => (
  <header className={styles.header} id="header">
    <div
      className={styles.headerBg}
      style={{ backgroundImage: `url(${heroBanner})` }}
    ></div>
    <div className={styles.headerBar}>
      <Container className={styles.headerContainer}>
        <Link to="/">
          {siteTitle} © {new Date().getFullYear()}
        </Link>
        <div className={styles.headerMenu}>
          <AnchorLink href="#about">About</AnchorLink>
          <AnchorLink href="#skills">Skills</AnchorLink>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          <AnchorLink href="#experience">Experience</AnchorLink>
          <AnchorLink href="#education">Education</AnchorLink>
        </div>
      </Container>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
