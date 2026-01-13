import type { ExperienceItem } from "@/experiences/types"

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <section aria-label="Experience timeline" className="relative w-full bg-main/50 p-10">
      {/* Vertical line (mobile: left) */}
      <div className="pointer-events-none absolute inset-y-0 left-4 w-px bg-white/70 md:hidden" />
      {/* Vertical line (desktop: center) */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/70 md:block" />

      <ol className="relative space-y-10 md:space-y-14">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0
          const sideClass = isEven
            ? "md:col-start-1 md:pr-10 md:text-right"
            : "md:col-start-2 md:pl-10 md:text-left"

          return (
            <li
              key={`${item.company}-${item.title}-${idx}`}
              className="relative md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Dot markers */}
              <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-2 ring-4 ring-[#DAD0DC] md:hidden" />
              <span className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent-2 ring-4 ring-[#DAD0DC] md:block" />

              {/* Column content */}
              <div className={`pl-10 md:pl-0 ${sideClass}`}>
                <article className="w-full rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm sm:p-6">
                  <header className="mb-3">
                    <h3>
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-main">
                      <span className="font-medium">{item.company}</span>
                      {item.location ? (
                        <span className="ml-2 text-main/80">• {item.location}</span>
                      ) : null}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-wide text-main/70">
                      {item.startDate} — {item.endDate}
                    </p>
                  </header>

                  <p className="text-sm leading-relaxed text-main">
                    {item.description}
                  </p>
                </article>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
