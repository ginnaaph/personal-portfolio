import { useMemo, useState } from 'react';
import type { ProjectItem, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';

const categories: Array<ProjectCategory | 'all'> = ['all', 'programming', 'baking', 'art'];

interface ProjectGridProps {
  projects: ProjectItem[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <section aria-label="Projects" className="w-full p-3 md:p-8 lg:p-8">
      <div className="mb-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat, i) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            aria-controls={`panel-${cat}`}
            onClick={() => setActive(cat)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                const next = categories[(i + 1) % categories.length];
                setActive(next);
              } else if (e.key === 'ArrowLeft') {
                const prev = categories[(i - 1 + categories.length) % categories.length];
                setActive(prev);
              }
            }}
            className={`rounded-full px-3 py-1 text-sm  transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              active === cat ? 'bg-main text-white' : 'bg-white text-main hover:bg-main/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-live="polite"
        className="columns-1 sm:columns-2 lg:columns-3 gap-x-4"
      >
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
