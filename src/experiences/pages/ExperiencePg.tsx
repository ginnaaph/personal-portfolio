import { Navigation } from "@/components/ui/navigation/Navigation"
import { ExperienceHeader } from "@/experiences/components/ExperienceHeader"
import ExperienceTimeline from "@/experiences/components/ExperienceTimeline"
import { experienceData } from "@/data/experienceData"
import { Footer } from "@/home/components/Footer"
import { AbstractDivider } from "@/components/ui/AbstractDivider"
export default function ExperiencePg() {
  return (
    <div id="experiences" className="flex min-h-screen w-full flex-col">
      <Navigation />

      <main className="w-full flex-1 bg-secondary pt-3">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <ExperienceHeader />
        </div>

        <section className="w-full bg-accent-2">
          <AbstractDivider color="var(--color-secondary)" className="-mb-px" />
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <ExperienceTimeline items={experienceData} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
