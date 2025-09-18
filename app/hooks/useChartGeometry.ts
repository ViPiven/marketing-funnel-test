import {
  SVG_WIDTH,
  ORIG_LEFT_X,
  ORIG_RIGHT_X,
  ORIG_X_DIFF,
  LEFT_MARGIN,
  RIGHT_MARGIN,
  TOP_Y,
  BOTTOM_Y,
} from "@/app/constants/chartConstants";
import { toPercent } from "@/app/utils/chartUtils";

export function useChartGeometry() {
  const targetWidth = SVG_WIDTH - LEFT_MARGIN - RIGHT_MARGIN;
  const sx = targetWidth / ORIG_X_DIFF;
  const tx = LEFT_MARGIN - sx * ORIG_LEFT_X;

  const step = (BOTTOM_Y - TOP_Y) / 5;
  const gridLines = Array.from({ length: 6 }, (_, i) => TOP_Y + step * i);

  const start = { x: sx * ORIG_LEFT_X + tx, y: gridLines[5] };
  const end = { x: sx * ORIG_RIGHT_X + tx, y: gridLines[0] };

  const startPct = toPercent(start.x, start.y);
  const endPct = toPercent(end.x, end.y);

  return { gridLines, start, end, startPct, endPct, sx, tx };
}
