import { ExplorationRotatingText } from "@/components/ui/text/RotatingText"

export const IntroductionBlurb = () => {
  const text = ["build.", "paint.", "draw.", "code.", "create.", "innovate.", "explore."]

  return (
    <div className="flex flex-col items-center px-2 text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-2 font-serif text-2xl font-semibold leading-tight text-main sm:text-3xl">
        <span className="flex items-center">Come</span>
        <span className="inline-flex">
          <ExplorationRotatingText delay={0} y={10} duration={3000} text={text} />
        </span>
      </div>

      <p className="text-sm leading-relaxed text-neutral-700">
        with me on a journey of creativity, learning, and exploration.
      </p>
    </div>
  )
}
