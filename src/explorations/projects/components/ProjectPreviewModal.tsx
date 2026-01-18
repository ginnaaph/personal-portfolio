import { useEffect, useRef } from "react";
import type { ProjectItem, ProjectCategory } from "@/explorations/projects/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/buttonVariants";
import { cn } from "@/lib/utils";



interface ProjectPreviewModalProps {
  open: boolean;
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ open, project, onClose }: ProjectPreviewModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      // focus close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => document.removeEventListener("keydown", onKey);
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

      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
        <div className="flex items-center justify-between border-b border-secondary/60 px-5 py-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-accent-4">Preview</p>
            <h2
              id={`preview-title-${project.id}`}
              className="font-serif text-xl text-main sm:text-2xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Close
          </button>
        </div>

        <div className="p-5">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="mb-4 h-auto w-full rounded-xl object-cover"
          />
          <div className="mb-3 flex items-center justify-between">
            <Badge
              variant="secondary"
              className={getCategoryBadgeClass(project.category)}
              aria-label={`Category: ${project.category}`}
            >
              {project.category}
            </Badge>
            <span className="text-xs text-accent-4">
              {new Intl.DateTimeFormat(undefined, {
                month: "short",
                year: "numeric",
              }).format(new Date(project.date))}
            </span>
          </div>
          <p className="text-sm text-main/80">{project.previewDescription}</p>
          {project.projectUrl ? (
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                View Full Page
              </a>
            </div>
          ) : null}
        </div>
      </div>
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
