import { Navigation } from "../../components/ui/navigation/Navigation"
import { ExplorationHeader } from "../components/ExplorationsHeader"
import { Footer } from "../../home/components/Footer"
import  { projects } from "../../home/data/projectData"
import { ProjectGrid } from "../projects/components/ProjectGrid"


export const ExplorationsPg = () => {
  return (
    <div id="explorations" className="min-h-screen w-full">
      <Navigation />

      <main className="w-full bg-[#DAD0DC]">
<div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Sidebar */}
            <section className="md:col-span-3 md:sticky md:top-24 self-start rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6 md:max-h-[calc(100vh-6rem)] md:overflow-auto">
              <ExplorationHeader />
            </section>

            {/* Main content */}
            <section className="md:col-span-9">
              <ProjectGrid projects={projects} />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
