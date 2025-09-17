"use client";

import { useRouter } from "next/navigation";
import styles from "./styles/page.module.css";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.startBtn}
        onClick={() => router.push("/quiz/step1")}
      >
        Start
      </button>
    </div>
  );
}
