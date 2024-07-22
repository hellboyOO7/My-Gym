import React from "react";
import styles from "../ContactComponent/ContactComponent.module.css";

const ContactComponent = ({ item }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>{item.country}</h1>
          <p>{item.p1}</p>
          <p>{item.p2}</p>
          <p>{item.p3}</p>
          <span>
            <h2>CONTACT</h2>
            <p>email@example.com</p>
            <p>(555)-555-5555</p>
          </span>
        </div>
        <div className={styles.mapContainer}>
          <iframe className={styles.map} src={item.map}></iframe>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactComponent;
