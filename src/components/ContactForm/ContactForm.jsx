import React from "react";
import styles from "../ContactForm/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>SCHEDULE A VISIT</h1>
        <p>
          Take a free 30-minute tour of either of our locations to help you
          decide if Klipsan is the right gym for you. You’ll have the
          opportunity to try equipment, observe classes, and get direct answers
          to all of your questions.
        </p>
      </div>
      <form className={styles.formContainer}>
        <label htmlFor="">
          Name <span className={styles.required}>(Required)</span>
        </label>
        <span className={styles.nameArea}>
          <span className={styles.name}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" />
          </span>
          <span className={styles.name}>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" />
          </span>
        </span>
        <label htmlFor="email">
          Email <span className={styles.required}>(Required)</span>
        </label>
        <input type="email" id="email" />
        <label htmlFor="date">
          Date <span className={styles.required}>(Required)</span>
        </label>
        <input className={styles.date} type="date" id="date" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
