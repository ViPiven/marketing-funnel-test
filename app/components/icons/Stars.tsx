import React from "react";
import Star from "./Star";

type StarsProps = {
  size?: number;
  count?: number;
};

export default function Stars({ size = 16, count = 5 }: StarsProps) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} />
      ))}
    </div>
  );
}
