import styles from "./page.module.css";
import Button from "@/app/components/ui/Button/Button";
import Title from "@/app/components/ui/Title/Title";
import { ROUTES } from "@/app/constants/routes";
import { SVG_WIDTH, SVG_HEIGHT } from "@/app/constants/chartConstants";
import { CHART_PATH } from "@/app/constants/chartConstants";
import { useChartGeometry } from "@/app/hooks/useChartGeometry";

export default function Step3() {
  const { gridLines, start, end, startPct, endPct, scaleX, translateX } = useChartGeometry();

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <Title className={styles.title}>
          See your Spiritual Growth
          <br />
          progress by Sep 17, 2024
        </Title>
      </div>

      <div className={styles.chartWrapper}>
        <svg
          className={styles.chart}
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          width={SVG_WIDTH}
          height={SVG_HEIGHT}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Spiritual Growth chart"
        >
          {gridLines.map((y, i) => (
            <line
              key={i}
              x1={0}
              y1={y}
              x2={SVG_WIDTH}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth={1}
              strokeLinecap="round"
            />
          ))}

          <defs>
            <clipPath id="reveal">
              <rect
                x="0"
                y="0"
                width="0"
                height={SVG_HEIGHT}
                className={styles.revealRect}
              />
            </clipPath>
          </defs>

          <g transform={`matrix(${scaleX} 0 0 1 ${translateX} 0)`} clipPath="url(#reveal)">
            <path d={CHART_PATH} fill="#0062F5" />
          </g>

          <circle cx={start.x} cy={start.y} r={4.5} fill="#0062F5" />
          <circle cx={end.x} cy={end.y} r={4.5} fill="#0062F5" />
        </svg>

        <div
          className={styles.nowLabel}
          style={{
            left: `${startPct.x}%`,
            top: `${startPct.y}%`,
            transform: "translate(-50%, 12px)",
          }}
        >
          Now
        </div>
        <div
          className={styles.dateLabel}
          style={{
            left: `${endPct.x - 14}%`,
            top: `${endPct.y - 2}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className={styles.dateTop}>Sep 17</div>
          <div className={styles.dateBottom}>2024</div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button href={ROUTES.LANDING}>Continue</Button>
      </div>
    </div>
  );
}
