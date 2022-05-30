import React from "react";
import styles from "./Filter.module.css";
export const Filter = ({ setFilteredProductsData, productsData }) => {
  let timeout;

  const filterProducts = (ev) => {
    clearTimeout(timeout);
    const val = ev.target.value.toLowerCase().trim();
    timeout = setTimeout(() => {
      console.log(val);
      if (!val.length) return setFilteredProductsData(productsData);
      setFilteredProductsData(
        productsData.filter((prod) => {
          console.log(prod);
          return (
            prod.company.toLowerCase().includes(val) ||
            prod.compatability.some((comp) => comp.toLowerCase().includes(val))
          );
        })
      );
    }, 500);
  };
  const onCompanySelect = (ev) => {
    console.log(ev.target.value);
    if (ev.target.value === "all") return setFilteredProductsData(productsData);
    setFilteredProductsData(
      productsData.filter((prodData) =>
        prodData.company.toLowerCase().includes(ev.target.value)
      )
    );
  };
  return (
    <div className={styles.filterContainer}>
      <input type="text" onInput={filterProducts} />
      <select id="" onChange={onCompanySelect}>
        <option value="all">All</option>
        <option value="norton">Norton</option>
        <option value="mcafee">McAfee</option>
        <option value="totalav">TotalAV</option>
      </select>
    </div>
  );
};
