import React from "react";
import styles from "../Product/Product.module.css";

const Product = ({ product, onClose }) => {
  return (
    <div className={styles.container}>
      <p className={styles.path}>
        <a onClick={onClose}>Store</a> <span>{`>`}</span> {product.title}
      </p>
      <div className={styles.proContainer}>
        <div className={styles.detailContainer}>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <h4>{product.qty}</h4>
          <p className={styles.para}>{product.desc}</p>
          <div className={styles.paraBtn}>
            <ul className={styles.para}>
              {product.ing.map((list, idx) => {
                return <li key={idx}>{list}</li>;
              })}
            </ul>
            <button onClick={onClose} className={styles.subscribe}>
              Subscribe
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={product.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
