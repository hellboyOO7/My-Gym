import React, { useState } from "react";
import styles from "../About/About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  let [select, setSelect] = useState(false);
  let handleSelect = () => {
    // setSelect(!select);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <Link className={styles.linkTag} to="/instructor">
            <img src="about\instructor.png" alt="" />
            INSTRUCTOR
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Link className={styles.linkTag} to="/pricing">
            <img src="about\price.png" alt="" />
            PRICING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
