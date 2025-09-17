"use client";

import React, { useState } from "react";
import styles from "./landing.module.css";

import PlanSelector from "@/app/components/landing/PlanSelector/PlanSelector";
import Features from "@/app/components/landing/Features/Features";
import Results from "@/app/components/landing/Results/Results";
import Reviews from "@/app/components/landing/Reviews/Reviews";
import CTAButton from "@/app/components/landing/CTAButton/CTAButton";

export default function LandingPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const plans = [
    { id: "1", label: "1 – Month Plan", price: 10 },
    { id: "3", label: "3 – Month Plan", price: 30, popular: true },
    { id: "6", label: "6 – Month Plan", price: 60 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose your plan</h1>
      <PlanSelector plans={plans} selected={selected} setSelected={setSelected} />

      <CTAButton>Get my plan</CTAButton>

      <p className={styles.note}>
        You are enrolling in a 3–monthly subscription to{" "}
        <a href="https://awesomeapp.com/subscription">
          https://awesomeapp.com/subscription
        </a>{" "}
        with the discount price<br /> $29.99. You agree that the plan you selected
        will automatically be extended at the full price for successive renewal
        periods and you will be charged $99.99 every 3 months until you cancel
        the subscription. Payments will be charged from the card you specified
        here. You can cancel your subscription by contacting our customer
        support team via email at support@awesomeapp.com. Subscription Policy.
        The charge will appear on your bill as &quot;awesomeapp&quot;.
      </p>

      <Features />
      <Results />
      <Reviews />
    </div>
  );
}
