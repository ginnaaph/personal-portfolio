import { cn } from "@/lib/utils"

type WaveDividerProps = {
  color?: string
 height?: number
  flip?: boolean
  className?: string
}

export const WaveDivider = ({
  color = "var(--color-secondary)",
  height = 90,
  flip = false,
  className,
}: WaveDividerProps) => {
  return (
    <svg
      viewBox="0 0 1440 90"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cn(
        "block w-full",
        flip && "rotate-180",
        className
      )}
      style={{ height }}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        d="M0,40 C120,70 240,10 360,20 480,30 600,80 720,70 840,60 960,20 1080,30 1200,40 1320,60 1440,50 L1440,0 L0,0 Z"
      />
    </svg>
  )
}