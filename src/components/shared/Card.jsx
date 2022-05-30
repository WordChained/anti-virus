import React from "react";
import styles from "./Card.module.css";
export const Card = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};
