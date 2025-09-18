type Props = {
  size?: number;
  color?: string;
};

export default function CheckIcon({ size = 15, color = "#19B272" }: Props) {
  return (
    <svg
      width={size}
      height={(size * 12) / 15}
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7072 2.20712L5.50008 11.4142L0.292969 6.20712L1.70718 4.79291L5.50008 8.5858L13.293 0.792908L14.7072 2.20712Z"
        fill={color}
      />
    </svg>
  );
}