"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/app/components/ui/Button/Button";

export default function Step3() {
  const router = useRouter();

  // SVG sizes (from Figma)
  const svgW = 288;
  const svgH = 250;

  // Original X boundaries from the path (Figma export)
  const origLeftX = 6;
  const origRightX = 282;
  const origXDiff = origRightX - origLeftX; // 276

  // Desired margins (based on layout)
  const leftMargin = 28; 
  const rightMargin = 38; 

  // Effective drawing width for the path
  const targetWidth = svgW - leftMargin - rightMargin; // 222

  // Scale and translate to fit original path into target area
  const sx = targetWidth / origXDiff; 
  const tx = leftMargin - sx * origLeftX;

  // Horizontal grid lines
  const topY = 6;
  const bottomY = 244;
  const step = (bottomY - topY) / 5;
  const gridLines = Array.from({ length: 6 }, (_, i) => topY + step * i);

  // Start and end circle positions
  const start = { x: leftMargin, y: gridLines[5] }; 
  const end = { x: svgW - rightMargin, y: gridLines[0] };

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>
          See your Spiritual Growth
          <br />
          progress by Sep 17, 2024
        </h1>
      </div>

      <div className={styles.chartWrapper}>
        <svg
          className={styles.chart}
          viewBox={`0 0 ${svgW} ${svgH}`}
          width={svgW}
          height={svgH}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Spiritual Growth chart"
        >
          {/* Background grid */}
          {gridLines.map((y, i) => (
            <line
              key={i}
              x1={0}
              y1={y}
              x2={svgW}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth={1}
              strokeLinecap="round"
            />
          ))}

          {/* Reveal animation mask */}
          <defs>
            <clipPath id="reveal">
              <rect
                x="0"
                y="0"
                width="0"
                height={svgH}
                className={styles.revealRect}
              />
            </clipPath>
          </defs>

          {/* Chart path inside reveal */}
          <g transform={`matrix(${sx} 0 0 1 ${tx} 0)`} clipPath="url(#reveal)">
            <path
              d="M0.666667 244C0.666667 246.946 3.05448 249.333 6 249.333C8.94552 249.333 11.3333 246.946 11.3333 244C11.3333 241.054 8.94552 238.667 6 238.667C3.05448 238.667 0.666667 241.054 0.666667 244ZM58.9763 167.226L58.9149 166.228L58.9763 167.226ZM236.872 56.2522L236.74 55.261L236.872 56.2522ZM276.667 6C276.667 8.94552 279.054 11.3333 282 11.3333C284.946 11.3333 287.333 8.94552 287.333 6C287.333 3.05448 284.946 0.666667 282 0.666667C279.054 0.666667 276.667 3.05448 276.667 6ZM6 244L6.9477 244.319C11.9662 229.417 18.3813 210.731 26.9174 195.564C35.4928 180.328 45.9956 169.027 59.0378 168.224L58.9763 167.226L58.9149 166.228C44.7494 167.1 33.7783 179.296 25.1745 194.583C16.5315 209.94 10.0622 228.804 5.0523 243.681L6 244ZM58.9763 167.226L59.0378 168.224C75.7945 167.192 88.6098 173.365 102.076 177.773C115.534 182.178 129.398 184.684 147.707 175.803L147.27 174.903L146.834 174.003C129.171 182.571 115.893 180.191 102.699 175.872C89.5134 171.556 76.1676 165.166 58.9149 166.228L58.9763 167.226ZM147.27 174.903L147.707 175.803C166.192 166.836 170.335 148.522 173.513 132.259C175.119 124.045 176.467 116.403 179.175 110.44C181.85 104.553 185.795 100.429 192.589 99.1107L192.398 98.129L192.208 97.1473C184.613 98.621 180.219 103.309 177.355 109.613C174.524 115.843 173.134 123.774 171.551 131.875C168.352 148.241 164.32 165.522 146.834 174.003L147.27 174.903ZM192.398 98.129L192.589 99.1107C207.42 96.2329 214.999 85.9291 220.684 76.3547C223.558 71.5145 225.889 66.9742 228.474 63.4415C231.042 59.9309 233.678 57.6871 237.004 57.2434L236.872 56.2522L236.74 55.261C232.595 55.8138 229.534 58.6049 226.86 62.2606C224.201 65.8942 221.744 70.6517 218.964 75.3336C213.341 84.8034 206.153 94.4415 192.208 97.1473L192.398 98.129ZM236.872 56.2522L237.004 57.2434C242.526 56.5068 247.63 53.3457 252.268 49.0346C256.914 44.7173 261.173 39.1715 265.005 33.5194C268.837 27.8678 272.276 22.0559 275.249 17.222C278.259 12.327 280.731 8.53912 282.68 6.73346L282 6L281.32 5.26654C279.126 7.29959 276.503 11.3636 273.545 16.1744C270.549 21.0463 267.149 26.7942 263.35 32.397C259.552 37.9993 255.391 43.4025 250.907 47.5696C246.416 51.743 241.682 54.6017 236.74 55.261L236.872 56.2522Z"
              fill="#0062F5"
            />
          </g>

          {/* Circles */}
          <circle cx={start.x} cy={start.y} r={4.5} fill="#0062F5" />
          <circle cx={end.x} cy={end.y} r={4.5} fill="#0062F5" />
        </svg>

        {/* Labels */}
        <div
          className={styles.nowLabel}
          style={{
            left: `${start.x}px`,
            top: `${start.y}px`,
            transform: "translate(-20px, 56px)",
          }}
        >
          Now
        </div>
        <div
          className={styles.dateLabel}
          style={{
            left: `${end.x}px`,
            top: `${end.y}px`,
            transform: "translate(16px, -54px)",
          }}
        >
          <div className={styles.dateTop}>Sep 17</div>
          <div className={styles.dateBottom}>2024</div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          onClick={() => router.push("/landing")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
