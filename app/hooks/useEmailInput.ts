"use client";

import { usePersistentState } from "@/app/hooks/usePersistentState";
import { validateEmail } from "@/app/utils/validation";

export function useEmailInput(initialValue = "") {
  const [email, setEmail] = usePersistentState<string>("userEmail", initialValue);
  const [showError, setShowError] = usePersistentState<boolean>("userEmailError", false);

  const handleChange = (value: string) => {
    setEmail(value);
    if (value.trim() && validateEmail(value)) {
      setShowError(false);
    }
  };

  const handleBlur = () => {
    if (email.trim() && !validateEmail(email)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const reset = () => {
    setEmail("");
    setShowError(false);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userEmailError");
  };

  return {
    email,
    setEmail,
    showError,
    reset,
    bind: {
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value),
      onBlur: handleBlur,
    },
  };
}
