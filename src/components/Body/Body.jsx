import React from "react";
import styles from "../Body/Body.module.css";

const Body = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <h2>
          WE’RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS.
        </h2>
        <p>
          Klipsan Fitness is a gym where you come as you are, and do your best.
          Our membership offers both digital and in-club programming aimed at
          helping you achieve your fitness goals. Discover all of our club’s
          offerings below.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img1} src="HomePage\bannerimg1.jpg" alt="" />
        <img className={styles.img2} src="HomePage\bannerimg2.jpg" alt="" />
      </div>
      <div className={styles.container3}>
        <h2>AMENITIES</h2>
        <p>
          At Klipsan Fitness, we’re always expanding our amenities to meet the
          needs of our community. Something you’d like to see added to our list?
          Submit a request.
        </p>
        <div className={styles.features}>
          <span>
            <p>Modern Facilities</p>.<p>Premium Classes</p>.
            <p>Personal Trainers</p>.<p>Rockwall</p>.<p>Boxing Ring</p>
          </span>
          <span>
            <p>Juice Bar</p>.<p>Personal Nutritiousness</p>.
            <p>Monthly Guest Passes</p>.<p>Basketball Court</p>.<p>Locker</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
