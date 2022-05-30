import React from "react";
import { Card } from "../shared/Card";
import styles from "./Product.module.css";

import starIcon from "../../assets/icons/star.png";
import likeIcon from "../../assets/icons/like.png";
import { RatingStars } from "./rating-and-score/RatingStars";
import { Compatability } from "./compatability/Compatability";
import { Button } from "./button/Button";
import { Score } from "./rating-and-score/Score";
import { ExtraInfo } from "./advanteges-list/ExtraInfo";
import { useWindowSize } from "../../hooks/useWindowSize";
export const Product = ({ product, index }) => {
  const windowSize = useWindowSize();
  // console.log(product);
  return (
    <div className={styles.productContainer}>
      <Card>
        <div className={styles.firstLine}>
          <span
            className={`${styles.index} ${
              product.isEditorsChoice ? "" : styles.abs
            }`}
          >
            {index}
          </span>
          {product.isEditorsChoice && (
            <div className={styles.editorsChoice}>
              <span>Editor's Choice</span>
              <div className={styles.star}>
                <img src={starIcon} alt="" />
              </div>
            </div>
          )}
        </div>
        <div className={styles.images}>
          <img src={product.image[Object.keys(product.image)[0]]} alt="" />
          <img src={product.logo[Object.keys(product.logo)[0]]} alt="" />
        </div>
        <div className={styles.companyAndList}>
          <span className={styles.company}>{product.company}</span>
          <ExtraInfo extraInfo={product.extraInfo} />
        </div>
        <div className={styles.rightBlock}>
          <Score score={product.score} />
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <Compatability compatability={product.compatability} />
        </div>
        {windowSize.width > 800 && product.isEditorsChoice && (
          <img className={styles.like} src={likeIcon} />
        )}
        <Button text={windowSize.width < 800 ? "Visit Site ➡" : "Visit Site"} />
      </Card>
    </div>
  );
};
