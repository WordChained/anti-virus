import React, { useState } from "react";
import styles from "./AddProductModal.module.css";
export const AddProductForm = ({ addProduct }) => {
  const [advantageText, setAdvantageText] = useState("");
  const [advantageArray, setAdvantageArray] = useState([]);
  const addAdvantages = () => {
    setAdvantageArray((prevArray) => [...prevArray, advantageText]);
    setAdvantageText("");
  };
  //   {
  //     id: "123",
  //     image: { mcafee },
  //     logo: { mcafeeLogo },
  //     extraInfo: [
  //       "Limited Time Only: Get 72% Off!",
  //       "Secure VPN and password manager",
  //       "Identity theft & safe browsing",
  //       "100% virus removal guarantee",
  //     ],
  //     score: "9.8",
  //     compatability: ["ios", "apple", "android", "windows"],
  //     company: "McAfee - Award Winning Antivirus Protection",
  //     rating: 5,
  //     isEditorsChoice: true,
  //     isLiked: true,
  //     reviews: 10826,
  //   },
  const onSubmit = (ev) => {
    ev.preventDefault();
    const newProduct = {};
    addProduct(newProduct);
  };

  return (
    <form onSubmit={onSubmit} className={styles.addProductForm}>
      <input type="text" placeholder="Product Comapny" />
      <div className={styles.labelAndInput}>
        <label htmlFor="image">Product Image: </label>
        <input
          type="file"
          name="image"
          id=""
          accept="image/png, image/gif, image/jpeg"
          placeholder=""
        />
      </div>
      <div className={styles.labelAndInput}>
        <label htmlFor="logo"> Product logo: </label>
        <input
          type="file"
          name="logo"
          id=""
          accept="image/png, image/gif, image/jpeg"
          placeholder="Product Logo"
        />
      </div>
      <div className={styles.addAdvantages}>
        <input type="text" onInput={setAdvantageText} />
        <span onClick={addAdvantages}>➕</span>
      </div>
      <input
        type="number"
        min={1}
        max={10}
        name=""
        id=""
        placeholder="Product score"
      />
      <input
        type="number"
        min={1}
        max={5}
        name=""
        id=""
        placeholder="Product rating"
      />
    </form>
  );
};
