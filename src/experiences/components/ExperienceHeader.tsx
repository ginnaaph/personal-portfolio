import { DLResumeBttn } from "@/components/ui/DLResumeBttn"
export  const ExperienceHeader = () => {
  return (
    <header className="px-2 pb-10">
      <h1>
        Experiences
      </h1>

        <p className="mt-3 max-w-3xl leading-relaxed mb-3 pb-7">
        This portfolio is mostly about what I build for fun, but work has shaped how I think just as
        much. This page shares the professional roles where I’ve applied that same mindset: asking
        questions, refining systems, and building better ways of working alongside thoughtful teams.
      </p>

    <DLResumeBttn />
    </header>
  )
}
