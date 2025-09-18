import { SVG_WIDTH, SVG_HEIGHT } from "@/app/constants/chartConstants";

export const toPercent = (x: number, y: number) => ({
  x: (x / SVG_WIDTH) * 100,
  y: (y / SVG_HEIGHT) * 100,
});