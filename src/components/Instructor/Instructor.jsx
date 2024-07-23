import styles from "../Instructor/Instructor.module.css";

const Instructor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>NICOLE WINTER</h1>
          <p>PILATES, YOGA</p>
        </span>
        <img src="/trainer/trainer1.jpg" alt="" />
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>AARON HUGHES</h1>
          <p>STRENGTH TRAINING, BOXING</p>
        </span>
        <img src="/trainer/trainer2.jpg" alt="" />
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>DERRICK SAWYERS</h1>
          <p>CARDIO, CORE</p>
        </span>
        <img src="/trainer/trainer3.jpg" alt="" />
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>ALIYAH WILLIAMS</h1>
          <p>CORE, CARDIO</p>
        </span>
        <img src="/trainer/trainer4.jpg" alt="" />
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>OMAR HARRIS</h1>
          <p>CARDIO, YOGA</p>
        </span>
        <img src="/trainer/trainer5.jpg" alt="" />
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.textContainer}>
          <h1>TESHIA MILLER</h1>
          <p>BOXING, STRENGTH TRAINING</p>
        </span>
        <img src="/trainer/trainer6.jpg" alt="" />
      </div>
    </div>
  );
};

export default Instructor;
