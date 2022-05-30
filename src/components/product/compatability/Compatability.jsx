import React from "react";
import styles from "../Product.module.css";
import iosIcon from "../../../assets/icons/ios.png";
import windowsIcon from "../../../assets/icons/windows-platform-logo.png";
import androidIcon from "../../../assets/icons/android.png";
import appleIcon from "../../../assets/icons/apple-logo.png";
export const Compatability = ({ compatability }) => {
  const getIcon = (str) => {
    switch (str) {
      case "ios":
        return iosIcon;
      case "windows":
        return windowsIcon;
      case "android":
        return androidIcon;
      case "apple":
        return appleIcon;
    }
  };
  // console.log(compatability);
  return (
    <div className={styles.compatability}>
      <div> Compatability</div>
      <div className={styles.compIcons}>
        {compatability.map((icon, i) => (
          <img key={i} src={getIcon(icon)} alt="" />
        ))}
      </div>
    </div>
  );
};
