import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../AboutMe"
import { Footer } from "../Footer"
import { LatestsProjects } from "../overview/LatestProjects"
export const HomePg = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navigation />
            <Hero />
            <AboutMe />
            <LatestsProjects />
            <Footer />
            
        
        </div>
    )
}