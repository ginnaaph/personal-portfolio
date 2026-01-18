import { Navigation } from "../../components/ui/navigation/Navigation"
import { ExplorationHeader } from "../components/ExplorationsHeader"
import { Footer } from "../../home/components/Footer"
import { projects } from "../../home/data/projectData"
import { ProjectGrid } from "../projects/components/ProjectGrid"
import { ExplorationSideBar } from "../components/ExplorationSideBar"
export const ExplorationsPg = () => {
  return (
    <div id="explorations" className="flex min-h-screen w-full flex-col">
      <Navigation />

      <main className="w-full flex-1 bg-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <section className="mb-8 flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-sm md:p-6">
            <ExplorationHeader />
          </section>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <section>
            <ExplorationSideBar
              variant="all"
              className="w-full md:sticky md:top-24 md:max-h-[calc(100vh-6rem)] md:w-64 md:shrink-0 md:overflow-auto lg:w-72"
            />
            </section>
            <section className="flex-1 rounded-2xl bg-white p-4 shadow-sm md:p-6">
              <ProjectGrid projects={projects} />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
