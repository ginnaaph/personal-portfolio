import { Navigation } from "../../components/navigation/Navigation"
import { ExplorationHeader } from "../components/ExplorationsHeader"
import { Footer } from "../../home/Footer"
export const ExplorationsPg = () => {
    return (
        <div id="explorations" className="flex flex-col items-center justify-center">
            <Navigation />
            <ExplorationHeader />   
            <div className="text-3xl font-montserrat font-bold mt-20">
                Explorations Page Coming Soon!
            </div>
            <Footer /> 

            
        </div>
    )
}