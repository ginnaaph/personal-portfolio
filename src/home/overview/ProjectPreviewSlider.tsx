import * as React from 'react'
import type { ProjectItem } from '@/explorations/projects/types'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/utils'
import ProjectPreviewCard from './ProjectPreviewCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ProjectPreviewSliderProps = {
  items: ProjectItem[]
  title?: string
  ctaHref?: string
}

export function ProjectPreviewSlider({ items, title = 'Latest Projects', ctaHref = '/explorations' }: ProjectPreviewSliderProps) {
  const listRef = React.useRef<HTMLDivElement | null>(null)

  const scrollByAmount = React.useCallback((direction: -1 | 1) => {
    const el = listRef.current
    if (!el) return
    const amt = Math.round(el.clientWidth * 0.85) * direction
    el.scrollBy({ left: amt, behavior: 'smooth' })
  }, [])

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollByAmount(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollByAmount(1)
    }
  }, [scrollByAmount])

  return (
    <section aria-label="Project previews" className=" p-4 mx-auto w-5/6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="font-Montserrat text-4xl font-accent font-semibold py-3">{title}</div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByAmount(-1)}
            className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByAmount(1)}
            className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={listRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project preview slider"
        onKeyDown={onKeyDown}
        className="-mx-4 flex snap-x snap-mandatory scroll-pt-4 gap-5 sm:gap-6 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* Hide scrollbar in WebKit */}
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        {items.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 basis-[90%] sm:basis-[58%] md:basis-[42%] lg:basis-[32%] xl:basis-[28%]"
          >
            <ProjectPreviewCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end">
        <a href={ctaHref} aria-label="View all projects" className={cn(buttonVariants())}>
          View all projects
        </a>
      </div>
    </section>
  )
}

export default ProjectPreviewSlider
