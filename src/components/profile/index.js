import React from 'react';

import { ButtonLink } from '../button';
import { Footer } from '../footer';
import { ProfileImage } from './image';
import styles from './profileInfo.module.css';

export const Profile = () => (
  <>
    <div className={styles.infoBox}>
      <div className={styles.profileBox}>
        <div className={styles.profilePhotoBox}>
          <ProfileImage />
        </div>
        <div>
          <div className={styles.profileInfo}>
            <div className={styles.profilePrewords}>
              <span>Hello</span>
            </div>
            <h1 className={styles.profileTitle}>
              I'm <strong>Herman Semykozov</strong>
            </h1>
            <h2 className={styles.profilePosition}>
              Front-end developer based in Tallinn
            </h2>
          </div>
          <div className={styles.profileTable}>
            <strong>Age</strong>
            <span>30</span>
            <strong>Address</strong>
            <span>10134, Estonia, Tallinn, Veerenni 4</span>
            <strong>E-mail</strong>
            <span>semikozovgerman@gmail.com</span>
            <strong>Phone</strong>
            <span>+372 560 70 703</span>
          </div>
        </div>
      </div>
      <Footer className={styles.profileSocials} />
    </div>
    <div className={styles.profileDescription}>
      <ButtonLink
        href="https://docs.google.com/document/d/1s1IPfUBokQJLAKxZ_Ry_8wksEZJULahf73Y5r7j3M1w/edit?usp=sharing"
        text="download resume"
      />
      <p>
        Hello! I’m Herman Semykozov. Experienced Web Developer specializing in
        front end development. Experienced with all stages of the development
        cycle for dynamic web projects. Well-versed in JavaScript and
        JS-frameworks / JS-libraries like React, Redux, React Native, Vue,
        AngularJS, Node.
      </p>
    </div>
  </>
)
