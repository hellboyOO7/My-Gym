import React from "react";
import styles from "../Contact/Contact.module.css";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

const Contact = () => {
  let contactDetail = [
    {
      id: "01",
      country: "BROOKLYN",
      p1: "123 Demo St.",
      p2: "Brooklyn, NY",
      p3: "12345",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48420.20562898919!2d-73.9882697723663!3d40.6681770356555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1721282861369!5m2!1sen!2sin",
    },
    {
      id: "02",
      country: "LOS ANGELES",
      p1: "123 Demo St.",
      p2: "Los Angeles, LA",
      p3: "12345",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827803802!2d-118.74138195907396!3d34.02003924141445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1721282238599!5m2!1sen!2sin",
    },
  ];
  return (
    <div className={styles.container}>
      {contactDetail.map((item, idx) => {
        return (
          <>
            <ContactComponent key={idx} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Contact;
