import React from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Guadalupe Hudson",
      stars: "★★★★★",
      date: "2 January 2024",
      text: "All I want to know if you are working on another agent A game or chapters. Loved this game!",
    },
    {
      name: "Bobby Wintheiser",
      stars: "★★★★★",
      date: "27 December 2023",
      text: "I’ve played this over and over and I love it!",
    },
    {
      name: "Colleen Beahan",
      stars: "★★★★★",
      date: "19 December 2023",
      text: "Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would...",
    },
  ];

  return (
    <div className={styles.reviewsSection}>
      <h2 className={styles.reviewsTitle}>Users love App!</h2>

      {reviews.map((review, i) => (
        <div key={i} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <span className={styles.reviewName}>{review.name}</span>
            <span className={styles.stars}>{review.stars}</span>
          </div>
          <div className={styles.reviewDate}>{review.date}</div>
          <p className={styles.reviewText}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
