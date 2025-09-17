"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/app/components/ui/Button/Button";

export default function Step2() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleContinue = async () => {
    if (!validateEmail(email)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setIsSubmitting(true);

    try {
        const res = await fetch("/api/quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const result = await res.json();
        console.log("Server responded with:\n", JSON.stringify(result, null, 2));
    } catch (err) {
        console.error("Failed to send results:", err);
    }

    setTimeout(() => {
      router.push("/quiz/step3");
    }, 500);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Enter your email to get
        <br /> your personalised
        <br /> Spiritual Growth Plan
      </h1>

      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Email</label>
          <input
            className={`${styles.input} ${showError ? styles.error : ""}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        {showError && <div className={styles.errorText}>Enter a valid email</div>}
      </div>

      <div className={styles.footer}>
        <Button
          onClick={handleContinue}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Continue"}
        </Button>
      </div>
    </div>
  );
}
