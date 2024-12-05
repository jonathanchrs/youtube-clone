export default function FlagIcon({
  className,
  size = "24px",
  fill = "#606060",
}: {
  className?: string;
  size?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={fill}
      className={className}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z" />
    </svg>
  );
}
