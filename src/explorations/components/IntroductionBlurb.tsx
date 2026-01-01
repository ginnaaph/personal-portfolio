import { ExplorationRotatingText } from "@/components/ui/text/RotatingText"

export const IntroductionBlurb = () => {
  const text = ["build.", "paint.", "draw.", "code.", "create.", "innovate.", "explore."]

  return (
    <div className="px-2">
      <div className="flex flex-wrap items-baseline gap-x-2 text-left font-serif text-2xl font-semibold leading-tight text-main sm:text-3xl">
        <span>Come</span>
        <span className="inline-flex">
          <ExplorationRotatingText delay={0} y={10} duration={3000} text={text} />
        </span>
      </div>

      <p className="mt-2 text-left text-sm leading-relaxed text-neutral-700">
        with me on a journey of creativity, learning, and exploration.
      </p>
    </div>
  )
}
