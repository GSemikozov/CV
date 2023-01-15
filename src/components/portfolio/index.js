import React from 'react';

import AMplacecholder from './images/am-placeholder.jpg';
import JSplaceholder from './images/js-placeholder.jpg';
import MTplaceholder from './images/mt-placeholder.jpg';
import NEplaceholder from './images/ne-placeholder.jpg';
import openLinkIcon from './images/open-link-icon.svg';
import PAXplaceholder from './images/pax-placeholder.jpg';
import TR3placeholder from './images/tr3-placeholder.jpg';
import EDGplaceholder from './images/edg-placeholder.png';
import Commas3placeholder from './images/3commas-placeholder.png';
import styles from './portfolio.module.css';

const portfolioItems = [
  {
    id: 1,
    heading: "Paxful",
    url: "https://paxful.com",
    img: PAXplaceholder,
  },
  {
    id: 2,
    heading: "Admiral Markets",
    url: "https://admiralmarkets.com",
    img: AMplacecholder,
  },
  {
    id: 3,
    heading: "MTrading",
    url: "https://mtrading.com",
    img: MTplaceholder,
  },
  {
    id: 4,
    heading: "Learn Javascript",
    url: "https://learn.javascript.ru",
    img: JSplaceholder,
  },
  {
    id: 5,
    heading: "3commas",
    url: "https://3commas.io",
    img: Commas3placeholder,
  },
  {
    id: 6,
    heading: "Edgio",
    url: "https://edg.io",
    img: EDGplaceholder,
  },
]

const PortfolioItem = ({ img, heading, url }) => (
  <div
    className={styles.portfolioItem}
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className={styles.portfolioItemContent}>
      <h2>{heading}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={openLinkIcon} alt="icon" />
      </a>
    </div>
  </div>
)

export const Portfolio = () => (
  <div className={styles.portfolio}>
    {portfolioItems &&
      portfolioItems.map(item => (
        <PortfolioItem
          key={item.id}
          heading={item.heading}
          url={item.url}
          img={item.img}
        />
      ))}
  </div>
)
