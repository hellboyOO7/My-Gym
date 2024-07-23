import React from "react";
import styles from "../BookDay/BookDay.module.css";

const BookDay = ({ day, four, six }) => {
  return (
    <div className={styles.container}>
      <h1>{day}</h1>
      <div className={styles.innerContainer}>
        <h2>{four} 4-5PM</h2>
        <p className={styles.para}>
          <strong>LOCATION:</strong> LOS ANGELES
        </p>
        <p className={styles.para}>
          <strong>INSTRUCTOR:</strong> AARON HUGHES
        </p>
        <br />
        <h2>{six} 6-7PM</h2>
        <p className={styles.para}>
          <strong>LOCATION:</strong> BROOKLYN
        </p>
        <p className={styles.para}>
          <strong>INSTRUCTOR:</strong> NICOLE WINTER
        </p>
        <button className={styles.bookClass}>BOOK CLASS</button>
      </div>
    </div>
  );
};

export default BookDay;
