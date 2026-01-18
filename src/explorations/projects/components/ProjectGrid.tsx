import { useMemo, useState } from "react"
import type { ProjectItem, ProjectCategory } from "../types"
import { ProjectCard } from "./ProjectCard"

const categories: Array<ProjectCategory | "all"> = ["all", "programming", "baking", "art"]

interface ProjectGridProps {
  projects: ProjectItem[]
  showFilters?: boolean
}

export function ProjectGrid({ projects, showFilters = true }: ProjectGridProps) {
  const [active, setActive] = useState<ProjectCategory | "all">("all")

  const filtered = useMemo(() => {
    if (active === "all") return projects
    return projects.filter((p) => p.category === active)
  }, [projects, active])

  return (
    <section aria-label="Projects" className="w-full pt-0 md:p-7 lg:p-8">
      {showFilters ? (
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="font-serif text-2xl text-main">Projects</h2>
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none]"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat, i) => {
              const label = cat === "all" ? "All" : cat[0].toUpperCase() + cat.slice(1)
              const isActive = active === cat

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat}`}
                  onClick={() => setActive(cat)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      setActive(categories[(i + 1) % categories.length])
                    } else if (e.key === "ArrowLeft") {
                      setActive(categories[(i - 1 + categories.length) % categories.length])
                    }
                  }}
                  className={[
                    "shrink-0 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main/40",
                    isActive
                      ? "border-accent-1/70 bg-accent-1 text-main shadow-sm"
                      : "border-secondary/70 bg-secondary text-main hover:bg-accent-1/40",
                  ].join(" ")}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      {/* Masonry */}
      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-live="polite"
        className="w-full columns-1 gap-x-4 sm:columns-2 lg:columns-3"
      >
        {filtered.map((p) => (
          <div key={p.id} className="mb-4 break-inside-avoid">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
