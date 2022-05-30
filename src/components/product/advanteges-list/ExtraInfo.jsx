import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "../Product.module.css";

export const ExtraInfo = ({ extraInfo }) => {
  const windowSize = useWindowSize();
  return (
    <ul className={styles.extraInfoList}>
      {extraInfo.map((info, i) => {
        if (windowSize.width < 800 && i > 1) return;
        return <li key={i}>{info}</li>;
      })}
    </ul>
  );
};
