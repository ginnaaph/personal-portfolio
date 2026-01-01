import type { ComponentType } from "react"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si"

export type IconStackItem = {
  icon: ComponentType<{ size?: number; color?: string; title?: string }>
  label: string
  color?: string
}

const iconTechStacks: IconStackItem[] = [
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiReact, label: "React", color: "#61DBFB" },
  { icon: SiVite, label: "Vite", color: "#646CFF" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss3, label: "CSS3", color: "#1572B6" },
]

export const IconStack = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      {iconTechStacks.map(({ icon: Icon, color, label }) => (
        <span key={label} className="select-none" aria-label={label} title={label}>
          <Icon size={18} color={color} />
        </span>
      ))}
    </div>
  )
}
