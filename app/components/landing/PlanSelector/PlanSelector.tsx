"use client";

import React from "react";
import styles from "./PlanSelector.module.css";

interface Plan {
  id: string;
  label: string;
  price: number;
  popular?: boolean;
}

interface Props {
  plans: Plan[];
  selected: string | null;
  setSelected: (id: string) => void;
}

export default function PlanSelector({ plans, selected, setSelected }: Props) {
  return (
    <div className={styles.plans}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`${styles.planCard} ${
            selected === plan.id ? styles.active : ""
          }`}
          onClick={() => setSelected(plan.id)}
        >
          {plan.popular && (
            <div className={styles.popularBar}>MOST POPULAR</div>
          )}

          <div className={styles.content}>
            <label className={styles.label}>
              <input
                type="radio"
                name="plan"
                checked={selected === plan.id}
                onChange={() => setSelected(plan.id)}
              />
              <span className={styles.planText}>{plan.label}</span>
            </label>

            <span className={styles.priceBadge}>
              <span className={styles.dollar}>$</span>
              <span className={styles.amount}>{plan.price}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
