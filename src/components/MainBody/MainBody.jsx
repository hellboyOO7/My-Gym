import React from "react";
import Body from "../Body/Body";
import ContactForm from "../ContactForm/ContactForm";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";
import Hero from "../Hero/Hero";

const MainBody = () => {
  return (
    <>
      <div className="main-container">
        <Hero />
      </div>
      <Body />
      <ContactForm />
      <Banner />
      <Location />
    </>
  );
};

export default MainBody;
