import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/buttonVariants'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ProjectPreviewModal } from '@/explorations/projects/components/ProjectPreviewModal'
import type { ProjectItem } from '@/explorations/projects/types'

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

  return (
    <Card
      className={['group overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg focus-within:ring-2 focus-within:ring-ring', className].filter(Boolean).join(' ')}
      role="group"
    >
      <button
        type="button"
        aria-label={`Open preview for ${item.title}`}
        onClick={() => onClick?.(item)}
        className="relative aspect-4/3 w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </button>

      <CardHeader className="gap-1">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" aria-label={`Category: ${item.category}`}>{item.category}</Badge>
          <span className="text-muted-foreground text-xs" aria-label={`Date: ${formatMonthYear(item.date)}`}>
            {formatMonthYear(item.date)}
          </span>
        </div>
        <CardTitle className="text-base sm:text-lg line-clamp-1">{item.title}</CardTitle>
        {item.previewDescription && (
          <CardDescription className="line-clamp-2">{item.previewDescription}</CardDescription>
        )}
      </CardHeader>

      <CardContent className="pb-6">
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={()=> setOpen(true)}
            aria-label={`Open ${item.title}`}
            className={cn(buttonVariants({ size: 'sm' }))}
          >
            View
          </button>
              <ProjectPreviewModal open={open} project={item} onClose={() => setOpen(false)} /> 

        </div>
      </CardContent>
    </Card>
  )
} 

export default ProjectPreviewCard
