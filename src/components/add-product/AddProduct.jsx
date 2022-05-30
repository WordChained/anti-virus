import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import plusIcon from "../../assets/icons/plus.png";
import { AddProductModal } from "./AddProductModal";
export const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.addProductContainer}>
      {isModalOpen && (
        <div className={styles.screenCover} onClick={toggleModal}></div>
      )}
      {isModalOpen && <AddProductModal isModalOpen={isModalOpen} />}
      <img
        className={`${styles.fixedButton} ${isModalOpen ? styles.open : ""}`}
        src={plusIcon}
        alt=""
        onClick={toggleModal}
      />
    </div>
  );
};
