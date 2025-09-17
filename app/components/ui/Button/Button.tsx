"use client";

import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Sending..." : children}
    </button>
  );
}
