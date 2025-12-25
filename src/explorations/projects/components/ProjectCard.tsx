import { useState } from 'react';
import type { ProjectItem } from '../types';
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
          <Badge variant="default" aria-label={`Category: ${project.category}`}>
            {project.category}
          </Badge>
        </div>
      </div>

      <ProjectPreviewModal open={open} project={project} onClose={() => setOpen(false)} />
    </div>
  );
}
