import { DLResumeBttn } from "@/components/ui/DLResumeBttn"
export const ExperienceHeader = () => {
  return (
    <header className="rounded-2xl bg-white p-6 text-center shadow-sm md:p-8">
      <h1 className="text-2xl font-semibold text-main md:text-3xl">Experiences</h1>

      <p className="mt-3 text-sm text-neutral-700 md:text-base">
        This portfolio is mostly about what I build for fun, but work has shaped how I think just as
        much. This page shares the professional roles where I’ve applied that same mindset: asking
        questions, refining systems, and building better ways of working alongside thoughtful teams.
      </p>

      <div className="mt-5 flex justify-center">
        <DLResumeBttn />
      </div>
    </header>
  )
}
