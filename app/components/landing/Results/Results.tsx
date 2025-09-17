import React from "react";
import styles from "./Results.module.css";

export default function Results() {
  const results = [
    { percent: "71%", text: "of users were able to feel the power of prayer after just 6 weeks" },
    { percent: "65%", text: "of users started to have a meaningful daily routine and peaceful mind" },
    { percent: "47%", text: "of users struggled with finding time for daily praying" },
  ];

  return (
    <div className={styles.resultsSection}>
      <h2 className={styles.resultsTitle}>
        People just like you achieved
        <br />
        great results with App!
      </h2>
      <div className={styles.resultsCard}>
        {results.map((item, i) => (
          <div key={i} className={styles.resultItem}>
            <span className={styles.percent}>{item.percent}</span>
            <span className={styles.resultText}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
