"use client";
import { useEffect, useState } from "react";
import styles from "./AnimatedCheck.module.css";

export default function AnimatedCheck({ delay = 0 }: { delay?: number }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <svg
      className={`${styles.icon} ${animate ? styles.animate : ""}`}
      viewBox="0 0 24 24"
    >
      <circle
        className={styles.circle}
        cx="12"
        cy="12"
        r="9"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={styles.check}
        d="M8 12.5L11 15.5L16 9.5"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
