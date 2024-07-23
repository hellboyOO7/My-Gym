import React from "react";
import styles from "../Schedule/Schedule.module.css";
import BookDay from "../../components/BookDay/BookDay";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <BookDay day="MONDAY" four="BOXING" six="YOGA" />
      <hr />
      <BookDay day="TUESDAY" four="CARDIO" six="PILATES" />
      <hr />
      <BookDay day="WEDNESDAY" four="BOXING" six="YOGA" />
      <hr />
      <BookDay day="THURSDAY" four="CARDIO" six="YOGA" />
      <hr />
      <BookDay day="FRIDAY" four="BOXING" six="STRENGTH" />
      <hr />
      <BookDay day="SATURDAY" four="CARDIO" six="STRENGTH" />
      <hr />
      <BookDay day="SUNDAY" four="PILATES" six="BOXING" />
    </div>
  );
};

export default Schedule;
