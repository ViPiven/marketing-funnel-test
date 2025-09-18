import React from "react";
import styles from "./Features.module.css";
import CheckIcon from "../../icons/CheckIcon";
import { FEATURES } from "@/app/constants/landingData";

export default function Features() {
  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.featuresTitle}>What you get</h2>
      <div className={styles.featuresCard}>
        {FEATURES.map((item) => (
          <div key={item.id} className={styles.featureItem}>
            <span>
              <CheckIcon />
            </span>
            <span className={styles.featureText}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
