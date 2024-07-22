import React from "react";
import styles from "../Location/Location.module.css";

const Location = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaction}>
        <span className={styles.textContainer}>
          <h1>BROOKLYN</h1>
          <p>
            12834 Fitness Ln.
            <br />
            Brooklyn, Ny
            <br />
            11385
          </p>
        </span>
        <span className={styles.textContainer}>
          <h1>LOS ANGELES</h1>
          <p>
            12834 Fitness Ln.
            <br />
            Los Angeles, LA
            <br />
            11385
          </p>
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img src="HomePage\1.jpg" alt="" />
        <img src="HomePage\2.jpg" alt="" />
        <img src="HomePage\3.jpg" alt="" />
        <img src="HomePage\4.jpg" alt="" />
        <img src="HomePage\5.jpg" alt="" />
        <img src="HomePage\6.jpg" alt="" />
      </div>
    </div>
  );
};

export default Location;
