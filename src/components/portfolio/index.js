import React from 'react';

import AMplacecholder from './images/am-placeholder.jpg';
import JSplaceholder from './images/js-placeholder.jpg';
import MTplaceholder from './images/mt-placeholder.jpg';
import NEplaceholder from './images/ne-placeholder.jpg';
import openLinkIcon from './images/open-link-icon.svg';
import PAXplaceholder from './images/pax-placeholder.jpg';
import TR3placeholder from './images/tr3-placeholder.jpg';
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
    heading: "Nowescape",
    url: "https://nowescape.com",
    img: NEplaceholder,
  },
  {
    id: 6,
    heading: "TR3 MTrading",
    url: "https://tr3.mtrading.com",
    img: TR3placeholder,
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
