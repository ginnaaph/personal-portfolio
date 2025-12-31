import AboutMeImage from '../../assets/images/me/computer.png'
import Signature from '../../assets/images/me/signature.png'
import { AlbertEinsteinQuote } from './Quotes'
import { WaveDivider } from '@/components/ui/WaveDivider'

export const AboutMe = () => {
  return (
    <section id="aboutme" className="relative bg-[#DAD0DC]">
      <WaveDivider color="white" flip={false} className="-mb-px" />

      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
          {/* image */}
          <img
            src={AboutMeImage}
            alt="About me illustration"
            className="h-40 w-40 shrink-0 sm:h-56 sm:w-56"
          />

          {/* content */}
          <div className="w-full max-w-2xl text-center sm:text-left">
            <h2>
              A little about me,{" "}
              <span className="italic text-[#7e738E]">
                the curious mind behind the page...
              </span>
            </h2>

            <div className="mt-4 space-y-4">
              <p className="leading-relaxed">
                Welcome! I'm Gina, a lifelong learner, self-starter, and creative builder
                with a deep love for figuring things out. This portfolio is more than a
                collection of work, it's a reflection of who I am. Curiosity is the heart
                of my personal brand. It is what led to me teach myself how to code, to
                draw and paint, and to explore how systems, people, and ideas connect.
              </p>

              <p className="leading-relaxed">
                Whether it's refining a process, designing a solution, or experimenting
                with something new, I'm always asking "How does this work?" and "How can
                we make it better?" Here, you'll find the projects I've created along the
                way—each one is a small chapter in my journey of learning, building, and
                growing through curiosity.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center sm:items-end">
              <p className="text-sm">Thank you for stopping by!</p>
              <img
                src={Signature}
                alt="Signature"
                className="mt-2 h-14 w-32 sm:h-16 sm:w-40"
              />
            </div>

            <div className="mt-8">
              <AlbertEinsteinQuote />
            </div>
          </div>
        </div>
      </div>

      <WaveDivider color="#775d68" flip={true} className="-mt-px" />
    </section>
  )
}
