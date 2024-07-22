import React, { useState } from "react";
import styles from "./Store.module.css";
import Product from "../../components/Product/Product";

const Store = () => {
  const productList = [
    {
      id: "01",
      img: "store/pro2.png",
      isConsumable: true,
      title: "Fresh Pressed Juices",
      qty: "",
      desc: "Buy our cold-pressed variety pack.",
      ing: ["Vegan", "Gluten-free", "No GMO's", "No sugar added"],
      price: "25.00",
    },
    {
      id: "02",
      img: "store/pro3.png",
      isConsumable: true,
      title: "Protein Bars",
      qty: "",
      desc: "All natural protein bars that you can purchase in a simple reoccurring, monthly order. ",
      ing: [
        "25g of protein per serving",
        "Grass fed, non-GMO",
        "Soy Free and Gluten Free",
        "No rBGH or rBST",
        "No artificial colors, sweeteners or flavors",
        "Zero added sugar",
      ],
      price: "36.00",
    },
    {
      id: "03",
      img: "store/pro4.png",
      isConsumable: false,
      title: "Endurance T-Shirt",
      qty: "",
      desc: "Buy our limited edition Klipsan t-shirt.",
      ing: ["100% organic cotton", "Pre-washed"],
      price: "30.00",
    },
    {
      id: "04",
      img: "store/pro5.png",
      isConsumable: true,
      title: "Protein Powder",
      qty: "Net Weight 765g, 28 Servings",
      desc: "All natural protein powder that you can purchase in a simple reoccurring, monthly order. ",
      ing: [
        "25g of protein per serving",
        "Grass fed, non-GMO",
        "Soy Free and Gluten Free",
        "No rBGH or rBST",
        "No artificial colors, sweeteners or flavors",
        "Zero added sugar",
      ],
      price: "30.00",
    },
    {
      id: "05",
      img: "store/pro6.png",
      isConsumable: false,
      title: "Gift Card",
      desc: "",
      qty: "",
      ing: [
        "Purchasing this digital gift card creates a unique code. The gift card recipient can enter this code at checkout to subtract the gift card value from their order total.",
        "This gift card never expires.",
      ],
      price: "25.00",
    },
    {
      id: "06",
      img: "store/pro7.png",
      isConsumable: false,
      title: "Klipsan T-Shirt",
      qty: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere lorem feugiat volutpat finibus. Sed non tellus in ex aliquet pulvinar sit amet quis elit.",
      ing: ["100% organic cotton", "Pre-washed"],
      price: "25.00",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  let [isTrue, setIsTrue] = useState(false);

  const handleProductClick = (id) => {
    const clickedProduct = productList.find((product) => product.id === id);
    setSelectedProduct(clickedProduct);
    setIsTrue(true);
    isOnTop();
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
    setIsTrue(false);
    isOnTop();
  };
  let isOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isTrue ? (
        <div className={styles.container}>
          <div className={styles.bannerContainer}>
            <div className={styles.imgContainer}>
              <button
                onClick={() => handleProductClick(productList[3].id)}
                className={styles.buyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className={styles.productContainer}>
            {productList.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className={styles.mainContainer}
              >
                <div className={styles.proImg}>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className={styles.detailContainer}>
                  <h2>{product.title}</h2>
                  <p>
                    ${product.price} {product.isConsumable ? "every month" : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Product product={selectedProduct} onClose={handleCloseProductDetail} />
      )}
    </>
  );
};

export default Store;
