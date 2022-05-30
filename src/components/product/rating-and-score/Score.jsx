import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "../Product.module.css";
export const Score = ({ score }) => {
  const windowSize = useWindowSize();
  const getDescriptionByScore = () => {
    switch (true) {
      case +score > 9.4:
        return "Superb";
      case +score > 9.0:
        return "Excellent";
      default:
        return "Very Good";
    }
  };
  return (
    <div className={styles.score}>
      <div className={styles.circle}>
        {windowSize.width > 800 && <span>{getDescriptionByScore()}</span>}
        <h2>{score}</h2>
      </div>
    </div>
  );
};
