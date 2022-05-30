import React, { useState } from "react";
import styles from "../Product.module.css";
import { Rating } from "react-simple-star-rating";
import { useWindowSize } from "../../../hooks/useWindowSize";
export const RatingStars = ({ rating, reviews }) => {
  const windowSize = useWindowSize();

  const [ratingCount, setRatingCount] = useState(rating * 20);
  // console.log(rating);
  return (
    <div className={styles.rating}>
      <Rating ratingValue={ratingCount} allowHalfIcon={true} readonly={true} />
      {windowSize.width > 800 && (
        <span>Reviews ({reviews.toLocaleString("he-IL")})</span>
      )}
    </div>
  );
};
