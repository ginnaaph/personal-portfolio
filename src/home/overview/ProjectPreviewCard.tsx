import { Card,  CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import type { ProjectItem, ProjectCategory } from '@/explorations/projects/types'

type Props = {
  item: ProjectItem
  onClick?: (item: ProjectItem) => void
  className?: string
}

function formatMonthYear(dateStr: string) {
  try {
    const d = new Date(dateStr)
    const fmt = new Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' })
    return fmt.format(d)
  } catch {
    return dateStr
  }
}

export function ProjectPreviewCard({ item, onClick, className }: Props) {

  const [ open, setOpen ] = useState(false )
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    if (open) {
      document.addEventListener('keydown', onKey)
      setTimeout(() => closeBtnRef.current?.focus(), 0)
    }

    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <Card
        className={['group overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg h-full focus-within:ring-2 focus-within:ring-ring', className].filter(Boolean).join(' ')}
        role="group"
      >
        <button
          type="button"
          aria-label={`Open preview for ${item.title}`}
          onClick={() => {
            onClick?.(item)
            setOpen(true)
          }}
          className="relative aspect-4/3 w-full overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 scale-[1.03] group-hover:scale-[1.08]"
            loading="lazy"
          />
        </button>

        <CardHeader className="gap-2">
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className={getCategoryBadgeClass(item.category)}
              aria-label={`Category: ${item.category}`}
            >
              {item.category}
            </Badge>
            <span className="text-xs text-accent-4" aria-label={`Date: ${formatMonthYear(item.date)}`}>
              {formatMonthYear(item.date)}
            </span>
          </div>
          <CardTitle className="line-clamp-1 font-serif text-xl text-main sm:text-2xl">
            {item.title}
          </CardTitle>
          {item.previewDescription && (
            <CardDescription className="line-clamp-2 text-sm text-main/80">
              {item.previewDescription}
            </CardDescription>
          )}
        </CardHeader>

       
      </Card>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`preview-title-${item.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <button
            aria-label="Close preview"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h3 id={`preview-title-${item.id}`} className="font-semibold text-main">
                {item.title}
              </h3>
              <button
                ref={closeBtnRef}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-1 text-sm font-medium text-accent-1 hover:bg-accent-1/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Close
              </button>
            </div>

            <div className="p-4">
              <img
                src={item.image}
                alt={item.title}
                className="mb-3 h-auto w-full rounded-xl object-cover"
              />

              <div className="mb-3 flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className={getCategoryBadgeClass(item.category)}
                  aria-label={`Category: ${item.category}`}
                >
                  {item.category}
                </Badge>
                <span className="text-xs text-accent-4">{formatMonthYear(item.date)}</span>
              </div>

              {item.previewDescription ? (
                <p className="text-sm text-neutral-700">{item.previewDescription}</p>
              ) : null}

              {item.projectUrl ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ size: 'sm' }))}
                  >
                    View full page
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

function getCategoryBadgeClass(category: ProjectCategory) {
  switch (category) {
    case "programming":
      return "bg-accent-3 text-main border-accent-3/60"
    case "baking":
      return "bg-accent-1 text-main border-accent-1/60"
    case "art":
      return "bg-option-1 text-main border-option-1/60"
    default:
      return ""
  }
}

export default ProjectPreviewCard
