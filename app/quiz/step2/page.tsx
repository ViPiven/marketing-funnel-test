"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "./page.module.css";
import Button from "@/app/components/ui/Button/Button";
import { ROUTES } from "@/app/constants/routes";
import Title from "@/app/components/ui/Title/Title";
import { sendQuizEmail } from "@/app/services/quizService";
import { useEmailInput } from "@/app/hooks/useEmailInput";
import { useState } from "react";

export default function Step2() {
  const router = useRouter();
  const { email, showError, bind, reset } = useEmailInput();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = async () => {
    if (showError || !email.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendQuizEmail(email);
      console.log("Server responded with:\n", JSON.stringify(result, null, 2));

      toast.success("Email successfully sent!");
      reset();

      setTimeout(() => {
        router.push(ROUTES.QUIZ.STEP3);
      }, 1000);
    } catch (err) {
      console.error("Failed to send results:", err);
      setIsSubmitting(false);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title}>
        Enter your email to get
        <br /> your personalised
        <br /> Spiritual Growth Plan
      </Title>

      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Email</label>
          <input
            className={`${styles.input} ${showError ? styles.error : ""}`}
            type="email"
            disabled={isSubmitting}
            {...bind}
          />
        </div>
        {showError && (
          <div className={styles.errorText}>Enter a valid email</div>
        )}
      </div>

      <div className={styles.footer}>
        <Button onClick={handleContinue} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Continue"}
        </Button>
      </div>
    </div>
  );
}
