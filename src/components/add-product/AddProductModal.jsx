import React from "react";
import { AddProductForm } from "./AddProductForm";
import styles from "./AddProductModal.module.css";
export const AddProductModal = ({ isModalOpen }) => {
  const addProduct = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
  };
  return (
    <div className={styles.modalContainer}>
      <h2>Add Product</h2>
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};
