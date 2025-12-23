import { Navigation } from "../../components/navigation/Navigation"
import { ExplorationHeader } from "../components/ExplorationsHeader"
import { Footer } from "../../home/Footer"
import { IconStack } from "../components/IconStacks"
import { ProjectGrid } from "../projects/components/ProjectGrid"
import { mockProjects } from "../projects/mockData"
export const ExplorationsPg = () => {
    return (
        <div id="explorations"  className="flex flex-col items-center justify-start">
            <Navigation />
            <div className="flex ">
            <div className="flex flex-1/3 bg-[#DAD0DC] p-2">
            <ExplorationHeader /> 
            </div>  
           
            <ProjectGrid projects={mockProjects} />
            </div>
            <IconStack />
            <Footer /> 

            
        </div>
    )
}