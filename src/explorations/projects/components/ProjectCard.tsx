import { useState } from 'react';
import type { ProjectItem } from '../types';
import { ProjectPreviewModal } from './ProjectPreviewModal';

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
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
          <span
            className="rounded-lg bg-white px-2 py-0.5 text-xs font-medium capitalize text-main border border-main "
            aria-label={`Category: ${project.category}`}
          >
            {project.category}
          </span>
        </div>
      </div>

      <ProjectPreviewModal open={open} project={project} onClose={() => setOpen(false)} />
    </div>
  );
}
