"use client";

import { useEffect, useState } from "react";

const MAX_PROGRESS = 87;
const ANIMATION_DURATION = 2000;

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    function frame(now: number) {
      const t = Math.min(1, (now - start) / ANIMATION_DURATION);
      setProgress(Math.round(MAX_PROGRESS * t));

      if (t < 1) {
        raf = requestAnimationFrame(frame);
      }
    }

    raf = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(raf);
  }, []);

  return progress;
};
