"use client";

import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import BackIcon from "../../icons/BackIcon";
import MenuIcon from "../../icons/MenuIcon";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.iconBtn}
          aria-label="back"
          onClick={() => router.back()}
        >
          <BackIcon />
        </button>
        <div className={styles.appTitle}>App</div>
        <button className={styles.iconBtn} aria-label="menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
