import React from "react";
import styles from "./Results.module.css";
import { RESULTS } from "@/app/constants/landingData";

export default function Results() {
  return (
    <div className={styles.resultsSection}>
      <h2 className={styles.resultsTitle}>
        People just like you achieved
        <br />
        great results with App!
      </h2>
      <div className={styles.resultsCard}>
        {RESULTS.map((item) => (
          <div key={item.id} className={styles.resultItem}>
            <span className={styles.percent}>{item.percent}</span>
            <span className={styles.resultText}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
