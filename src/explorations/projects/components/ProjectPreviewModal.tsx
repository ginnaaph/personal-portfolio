import { useEffect, useRef } from 'react';
import type { ProjectItem } from '@/explorations/projects/types';



interface ProjectPreviewModalProps {
  open: boolean;
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ open, project, onClose,  }: ProjectPreviewModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      // focus close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`preview-title-${project.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <button
        aria-label="Close preview"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-lg bg-white shadow-xl ring-1 ring-black/10">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <h2 id={`preview-title-${project.id}`} className="text-lg font-semibold">
            {project.title}
          </h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Close
          </button>
        </div>

        <div className="p-4">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="mb-3 h-auto w-full rounded-md object-cover"
          />
          <p className="text-sm text-gray-700">{project.previewDescription}</p>
{(project.projectUrl ) && ( <div className="mt-4 flex flex-wrap gap-2"> {project.projectUrl && ( <a href={project.projectUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" > View Full Page </a> )}
        
        </div>
          )}
        </div>
      </div>
    </div>
  );
}
