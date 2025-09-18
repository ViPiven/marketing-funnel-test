"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants/routes";
import AnimatedCheck from "@/app/components/ui/AnimatedCheck/AnimatedCheck";
import Title from "@/app/components/ui/Title/Title";
import { useProgress } from "@/app/hooks/useProgress";
import styles from "./page.module.css";


export default function Step1() {
  const router = useRouter();
  const progress = useProgress();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(ROUTES.QUIZ.STEP2);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  const pathLength = 590;
  const dash = (progress / 100) * pathLength;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Title className={styles.title}>
          We are crafting <br /> your spiritual growth plan
        </Title>

        <div className={styles.progressWrap} aria-hidden>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path
              d="M99.9281 11C117.329 11 134.35 16.093 148.887 25.6499C163.424 35.2069 174.841 48.8092 181.727 64.7768C188.614 80.7445 190.669 98.378 187.639 115.5C184.608 132.621 176.625 148.481 164.675 161.12C152.725 173.759 137.331 182.623 120.395 186.618C103.46 190.614 85.7238 189.565 69.378 183.601C53.0322 177.638 38.7927 167.021 28.418 153.062C18.0434 139.103 11.9881 122.413 11 105.053"
              stroke="#EDF2F7"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M99.9281 11C117.329 11 134.35 16.093 148.887 25.6499C163.424 35.2069 174.841 48.8092 181.727 64.7768C188.614 80.7445 190.669 98.378 187.639 115.5C184.608 132.621 176.625 148.481 164.675 161.12C152.725 173.759 137.331 182.623 120.395 186.618C103.46 190.614 85.7238 189.565 69.378 183.601C53.0322 177.638 38.7927 167.021 28.418 153.062C18.0434 139.103 11.9881 122.413 11 105.053"
              stroke="#0CBD68"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${pathLength - dash}`}
            />
          </svg>

          <div className={styles.progressLabel}>
            <span className={styles.progressNumber}>{progress}%</span>
          </div>
        </div>

        <div className={styles.stepsCard} role="list">
          <div className={styles.stepItem}>
            <AnimatedCheck delay={200} />
            Aligning with your goals
          </div>
          <div className={styles.stepItem}>
            <AnimatedCheck delay={700} />
            Reviewing your answers
          </div>
          <div className={styles.stepItem}>
            <AnimatedCheck delay={1200} />
            Picking Bible verses and prayers for you
          </div>
          <div className={styles.stepItem}>
            <AnimatedCheck delay={1400} />
            Finalizing your personalized plan
          </div>
        </div>
      </div>
    </div>
  );
}
