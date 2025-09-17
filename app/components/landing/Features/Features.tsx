import React from "react";
import styles from "./Features.module.css";

export default function Features() {
  const features = [
    "You wake up feeling motivated and energized",
    "You start your day in harmony with prayer",
    "Your relationships are stronger than ever",
    "You’re commited to spiritual growth and self-improvement",
    "You grow closer to God through everyday Bible reading",
  ];

  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.featuresTitle}>What you get</h2>
      <div className={styles.featuresCard}>
        {features.map((text, i) => (
          <div key={i} className={styles.featureItem}>
            <span>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7072 2.20712L5.50008 11.4142L0.292969 6.20712L1.70718 4.79291L5.50008 8.5858L13.293 0.792908L14.7072 2.20712Z" fill="#19B272"/>
                </svg>
            </span>
            <span className={styles.featureText}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
