import { cn } from "@/lib/utils"

type AbstractDividerProps = {
  color?: string
  height?: number
  flip?: boolean
  className?: string
}

export const AbstractDivider = ({
  color = "var(--color-secondary)",
  height = 64,
  flip = false,
  className,
}: AbstractDividerProps) => {
  return (
    <svg
      viewBox="0 0 1440 64"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cn("block w-full", flip && "rotate-180", className)}
      style={{ height }}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        d="M0,18 C120,36 240,6 360,14 480,22 600,52 720,46 840,40 960,14 1080,20 1200,26 1320,38 1440,30 L1440,0 L0,0 Z"
      />
    </svg>
  )
}
