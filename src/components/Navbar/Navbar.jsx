import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.css";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  let handleHam = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
    isOnTop();
  };
  let isOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.container}>
      <h1>
        <Link className={styles.logo} to="/" onClick={handleLinkClick}>
          KLIPSAN
        </Link>
      </h1>
      <div className={styles.navContainer}>
        <ul className={`${styles.list} ${isOpen ? styles.show : styles.hide}`}>
          <li>
            <Link className={styles.link} to="about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to="schedule"
              onClick={handleLinkClick}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to="contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="store" onClick={handleLinkClick}>
              Store
            </Link>
          </li>
        </ul>
        <span className={styles.hamMenu} onClick={handleHam}>
          {isOpen ? (
            <IoClose className={styles.close} />
          ) : (
            <GiHamburgerMenu className={styles.close} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
