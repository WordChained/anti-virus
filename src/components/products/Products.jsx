import React, { useState } from "react";
import { Product } from "../product/Product";
import styles from "./Products.module.css";
import { Filter } from "../filter/Filter";
import { Card } from "../shared/Card";

export const Products = ({ productsData, filteredProductsData }) => {
  return (
    <section className={styles.productsContainer}>
      {!!filteredProductsData.length ? (
        filteredProductsData.map((product, i) => (
          <Product key={product.id} product={product} index={i + 1} />
        ))
      ) : (
        <div className={styles.placeholder}>NO SUCH PRODUCT FOUND</div>
      )}
    </section>
  );
};
