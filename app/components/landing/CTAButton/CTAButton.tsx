import React from "react";
import styles from "./CTAButton.module.css";

interface Props {
  children: React.ReactNode;
}

export default function CTAButton({ children }: Props) {
  return <button className={styles.ctaBtn}>{children}</button>;
}
