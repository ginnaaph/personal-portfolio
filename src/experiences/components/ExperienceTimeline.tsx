import type { ExperienceItem } from "@/experiences/types";

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <section aria-label="Experience timeline" className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Vertical line (mobile: left) */}
      <div className="md:hidden pointer-events-none absolute inset-y-0 left-4 w-px bg-gray-200 dark:bg-gray-700" />
      {/* Vertical line (desktop: center) */}
      <div className="hidden md:block pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 transform w-px bg-gray-200 dark:bg-gray-700" />

      <ol className="relative space-y-12 md:space-y-16">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const sideClass = isEven
            ? "md:col-start-1 md:pr-10 md:text-right"
            : "md:col-start-2 md:pl-10 md:text-left";

          return (
            <li key={`${item.company}-${item.title}-${idx}`} className="relative md:grid md:grid-cols-2 md:gap-8">
              {/* Dot markers */}
              <span className="md:hidden absolute left-4 top-4 -ml-1.5 h-3 w-3 rounded-full bg-accent-2 ring-4 ring-white dark:ring-gray-900" />
              <span className="hidden md:block absolute left-1/2 top-4 -ml-1.5 h-3 w-3 -translate-x-1/2 transform rounded-full bg-accent-2 ring-4 ring-white dark:ring-gray-900" />

              <div className={`pl-4 md:pl-0 ${sideClass} bg-accent-2 gap-2 rounded-lg`}>
                <article className="inline-block rounded border border-accent-2 bg-[#DAD0DC] p-6 shadow-sm backdrop-blur-sm transition-colors dark:border-accent-2 dark:bg-gray-900/40">
                  <header className="mb-2">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-md text-main dark:text-[#DAD0DC]">
                      {item.company}
                      {item.location ? <span className="ml-2 text-main">• {item.location}</span> : null}
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-[#DAD0DC]">
                      {item.startDate} — {item.endDate}
                    </p>
                  </header>
                  <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{item.description}</p>
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
