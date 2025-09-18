import Link from "next/link";
import styles from "./styles/page.module.css";
import { ROUTES } from "@/app/constants/routes"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Link href={ROUTES.QUIZ.STEP1} className={styles.startBtn}>
        Start
      </Link>
    </div>
  );
}
