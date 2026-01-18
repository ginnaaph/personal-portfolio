import { useState } from 'react';
import type { ProjectItem, ProjectCategory } from '../types';
import { ProjectPreviewModal } from './ProjectPreviewModal';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-4 break-inside-avoid rounded-lg border border-black/10 bg-white shadow-sm transition hover:shadow-md"
    >
      <button
        type="button"
        aria-label={`Open preview for ${project.title}`}
        onClick={() => setOpen(true)}
        className="group block w-full"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-auto w-full rounded-t-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </button>

      <div className="px-3 py-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className=" font-semibold text-lg text-accent-2 ">{project.title}</div>
          <Badge
            variant="secondary"
            className={getCategoryBadgeClass(project.category)}
            aria-label={`Category: ${project.category}`}
          >
            {project.category}
          </Badge>
        </div>
      </div>

      <ProjectPreviewModal open={open} project={project} onClose={() => setOpen(false)} />
    </div>
  );
}

function getCategoryBadgeClass(category: ProjectCategory) {
  switch (category) {
    case "programming":
      return "bg-accent-3 text-main border-accent-3/60"
    case "baking":
      return "bg-accent-1 text-main border-accent-1/60"
    case "art":
      return "bg-accent-2 text-main border-accent-2/60"
    default:
      return ""
  }
}
