import React from 'react';

import styles from './education.module.css';

export const Education = () => (
  <>
    <div className={styles.education}>
      <div className={styles.educationDate}>2013 - present</div>
      <h4 className={styles.educationTitle}>Courses, conferences, workshops</h4>
      <p className={styles.educationPlace}>Anywhere in the world</p>
    </div>
    <div className={styles.education}>
      <div className={styles.educationDate}>2013 - 2014</div>
      <h4 className={styles.educationTitle}>Web-development</h4>
      <p className={styles.educationPlace}>Computer Academy STEP</p>
    </div>
    <div className={styles.education}>
      <div className={styles.educationDate}>2007 - 2012</div>
      <h4 className={styles.educationTitle}>
        History of Philosoply, <br />
        masters degree
      </h4>
      <p className={styles.educationPlace}>Kharkov National University</p>
    </div>
  </>
)
