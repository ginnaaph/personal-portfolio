import { Navigation } from "../../components/ui/navigation/Navigation"
import { Footer } from "../../home/components/Footer"
import { projects } from "../../home/data/projectData"
import { ExplorationSideBar } from "../components/ExplorationSideBar"
import { ProjectGrid } from "../projects/components/ProjectGrid"
import { ProgrammingIntro } from "../components/sections/programming/components/ProgrammingIntro"
export const ProgrammingPg = () => {
  const categoryProjects = projects.filter((project) => project.category === "programming")
  return (
    <div id="programming" className="flex min-h-screen w-full flex-col">
      <Navigation />

      <main className="w-full flex-1 bg-accent-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">

          <section className="mb-8 rounded-2xl bg-white p-6 text-center shadow-sm md:p-8">
           <h1> Programming</h1>
          </section>
         

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
          
             
          
            
            <ExplorationSideBar
              variant="programming"
              className="w-full md:sticky md:top-24 md:max-h-[calc(100vh-6rem)] md:w-64 md:shrink-0 md:overflow-auto lg:w-72"
            />

            <div className="flex-1 space-y-6">
              <section className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
                <ProgrammingIntro />
              </section>
              <section className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
               <h2 className="ml-5"> Projects</h2>
                <div className="rounded-xl p-2">
                  <ProjectGrid projects={categoryProjects} showFilters={false} />
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
