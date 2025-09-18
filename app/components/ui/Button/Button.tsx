"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          styles.button,
          disabled && styles.disabled
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        styles.button,
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Sending..." : children}
    </button>
  );
}
