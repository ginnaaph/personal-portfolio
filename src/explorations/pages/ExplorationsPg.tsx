import { Navigation } from "../../components/navigation/Navigation"
import { ExplorationHeader } from "../components/ExplorationsHeader"
import { Footer } from "../../home/Footer"
import { ProjectGrid } from "../projects/components/ProjectGrid"
import { mockProjects } from "../projects/mockData"

export const ExplorationsPg = () => {
    return (
        <div id="explorations" className="w-full min-h-screen flex flex-col">
            <Navigation />
            <main className="w-full flex-1 bg-[#DAD0DC]">
                <div className="mx-auto max-w-384 px-4 sm:px-6 lg:px-8 py-10 md:py-14">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <section className="md:col-span-4 md:sticky md:top-24 self-start bg-white rounded-2xl border border-neutral-200 p-4 md:p-6 shadow-sm">
                            <ExplorationHeader />
                        </section>

                        <section className="md:col-span-9 lg:col-span-8">
                            <ProjectGrid projects={mockProjects} />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}