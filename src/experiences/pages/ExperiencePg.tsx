import { Navigation } from "@/components/ui/navigation/Navigation"
import {ExperienceHeader} from "@/experiences/components/ExperienceHeader"
import ExperienceTimeline from "@/experiences/components/ExperienceTimeline"
import { experienceData } from "@/data/experienceData"
import { Footer } from "@/home/components/Footer"
export default function ExperiencePg() {
  return (
    <div id="experiences" className="min-h-screen w-full">
      <Navigation />

      <main className="w-full bg-[#DAD0DC] pt-3">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <div className="flex flex-col gap-8 md:gap-10">
            <ExperienceHeader />
            <ExperienceTimeline items={experienceData} />
          </div>
        </div>
      </main>
        <Footer />
    </div>
  )
}
