import React from 'react';

import styles from './experience.module.css';
import { AMLogo, ElLogo, LearnJSLogo, MtLogo, MtTR3Logo, NELogo, PaxfulLogo } from './logos';

export const Experience = () => (
  <div className={styles.experienceTimelineWrapper}>
    <div className={styles.experienceTimelineTrack}></div>
    <div className={styles.experienceTimelineColumn}>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2018 - present</div>
          <a href="https://paxful.com">
            <PaxfulLogo />
          </a>
          <h4>Front-end developer</h4>
        </div>
        <p>
          Working as a front-end developer with focus on UI and UX, in this case
          one of the main goals - implementing new design system, developing
          react components in storybook, and finally move on to PWA. But also
          take part in functionality development and new features
          implementation. General stack - react + react hooks + redux +
          typescript + rxjs + webpack + css-modules.
        </p>
      </div>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2016 - 2019</div>
          <a href="https://nowescape.com">
            <NELogo />
          </a>
          <h4>front-end UI developer</h4>
        </div>
        <p>
          Component-based approach, functionality programming, design-system
          implementation; responsible for interfaces and visual part of the
          website.
        </p>
      </div>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2016 - 2018</div>
          <a href="https://mtrading.com">
            <MtLogo />
          </a>
          <h4>full-stack web developer</h4>
        </div>
        <p>
          Migrate from modx to laravel, improve website performance, create a
          landings, implement new features and so on.
        </p>
      </div>
    </div>
    <div className={styles.experienceTimelineColumn}>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2018 - present</div>
          <a href="https://learn.javascript.ru">
            <LearnJSLogo />
          </a>
          <h4>front-end developer</h4>
        </div>
        <p>
          Taking part in making better and greater the main website; also
          helping to develop 'task books' for different javascript courses in
          which students can take practice and doing homework.
        </p>
      </div>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2016 - 2018</div>
          <a href="https://admiralmarkets.com">
            <AMLogo />
          </a>
          <h4>front-end / full-stack developer</h4>
        </div>
        <p>
          Worked as a senior front-end developer, I moved whole front-end to a
          separate repository, where was laid foundation for SPA via vuejs +
          webpack. Rewrote a lot of jquery spaghetti code to vuejs widgets or
          vanilla javascript modules. Created own css-framework. Developed
          landing-page constructor. Plus micro php-development in laravel and
          outdated angularjs code.
        </p>
      </div>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2015 - 2016</div>
          <a href="https://tr3.mtrading.com">
            <MtTR3Logo />
          </a>
          <h4>front-end UI developer</h4>
        </div>
        <p>
          Was a part of front-end team as UI developer - developed all static
          layouts from scratch (including bundler integration and other
          necessary things) - for the whole project. Project was a SPA in
          angular 2.
        </p>
      </div>
      <div className={styles.experienceTimelineBox}>
        <div className={styles.experienceTimelineDot}></div>
        <div className={styles.experienceTimelineHeader}>
          <div className={styles.experienceTimelineDate}>2014 - 2015</div>
          <a href="http://eleng.com.ua/">
            <ElLogo />
          </a>
          <h4>html developer / content manager</h4>
        </div>
        <p>ModX website: create pages, add content, bugfixing</p>
      </div>
    </div>
  </div>
)
