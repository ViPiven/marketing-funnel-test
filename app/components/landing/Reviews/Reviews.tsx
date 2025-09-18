import React from "react";
import styles from "./Reviews.module.css";
import { REVIEWS } from "@/app/constants/landingData";
import Stars from "@/app/components/icons/Stars";

export default function Reviews() {
  return (
    <div className={styles.reviewsSection}>
      <h2 className={styles.reviewsTitle}>Users love App!</h2>

      {REVIEWS.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <span className={styles.reviewName}>{review.name}</span>
            <Stars size={14} />
          </div>
          <div className={styles.reviewDate}>{review.date}</div>
          <p className={styles.reviewText}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
