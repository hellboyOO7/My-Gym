import styles from "../Pricing/Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.priceContainer}>
          <div>
            <h1>$40</h1>
            <p>/monthly</p>
          </div>
          <button>Buy Plan</button>
        </div>
        <div className={styles.detailContainer}>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference. Don’t
            worry about sounding professional. Sound like you. There are over
            1.5 billion websites out there, but your story is what’s going to
            separate this one from the rest.{" "}
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.innerContainer}>
        <div className={styles.priceContainer}>
          <div>
            <h1>$70</h1>
            <p>/monthly</p>
          </div>
          <button>Buy Plan</button>
        </div>
        <div className={styles.detailContainer}>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference. Don’t
            worry about sounding professional. Sound like you. There are over
            1.5 billion websites out there, but your story is what’s going to
            separate this one from the rest.{" "}
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.innerContainer}>
        <div className={styles.priceContainer}>
          <div>
            <h1>$100</h1>
            <p>/monthly</p>
          </div>
          <button>Buy Plan</button>
        </div>
        <div className={styles.detailContainer}>
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference. Don’t
            worry about sounding professional. Sound like you. There are over
            1.5 billion websites out there, but your story is what’s going to
            separate this one from the rest.{" "}
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
