import React, { useState } from "react";
import { Products } from "../../components/products/Products";
import styles from "./HomePage.module.css";
import { productsData } from "../../assets/data/products-data";
import { Filter } from "../../components/filter/Filter";
import { AddProduct } from "../../components/add-product/AddProduct";

export const HomePage = () => {
  const [filteredProductsData, setFilteredProductsData] =
    useState(productsData);
  return (
    <main className={styles.homePageContainer}>
      <Filter
        setFilteredProductsData={setFilteredProductsData}
        productsData={productsData}
      />
      <Products
        productsData={productsData}
        filteredProductsData={filteredProductsData}
      />
      <AddProduct />
    </main>
  );
};
