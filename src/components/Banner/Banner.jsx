import React from "react";
import styles from "../Banner/Banner.module.css";
import { FaQuoteLeft } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className={styles.container}>
      <span className={styles.quote}>
        <FaQuoteLeft />
      </span>
      <h1>
        KLIPSAN FITNESS WAS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY RECENT
        MARATHON.
      </h1>
      <p>-Neelesh Sharma</p>
    </div>
  );
};

export default Banner;
