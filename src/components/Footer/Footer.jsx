import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.updated}>
        <div className={styles.textContainer}>
          <h1>STAY UPDATED</h1>
          <p>
            Sign up to be the first to find out when we add new classes,
            amenities, and more. We respect your privacy and will never share
            your information with any third-party vendors.{" "}
          </p>
        </div>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Email Address" />
          <button className={styles.signup}>Sign Up</button>
        </div>
      </div>
      <hr />
      <div className={styles.support}>
        <div className={styles.div}>
          <h1>SUPPORT</h1>
          <p>Terms and Condition</p>
          <p>Private Policy</p>
          <p>FAQs</p>
        </div>
        <div className={styles.contact}>
          <h1>CONTACT</h1>
          <p>email@example.com</p>
          <p>1+(555)-555-5555</p>
        </div>
        <div className={styles.logo}>KLIPSAN</div>
      </div>
    </div>
  );
};

export default Footer;
