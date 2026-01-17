import { IntroductionBlurb } from "./IntroductionBlurb"
// import { IconStack } from "./IconStacks"

export const ExplorationHeader = () => {
  return (
    <div className="flex flex-col gap-1">
      <IntroductionBlurb />

      <p className="text-sm leading-relaxed ">
        Each project is a reflection of my curiosity, whether I'm sketching by hand or writing code,
        I’m always looking for new ways to bring ideas to life.
      </p>

      {/* <div className="pt-2">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-main">Tech Stack:</span>
          <IconStack />
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>🖌 Art created with ink, watercolor, gouache, color pencils, and graphite.</li>
          <li>💻 Coding projects built using TailwindCSS, Vite, React, Electron, JavaScript, and Python.</li>
          <li>🎨 Digital designs brought to life with Procreate and Adobe Illustrator.</li>
          <li>👩🏻‍🍳 Baking recipes I tried out.</li>
        </ul> */}
      {/* </div> */}
    </div>
  )
}
