import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../AboutMe"
import { Footer } from "../Footer"
import { LatestCreations } from "../overview/LatestCreation.tsx"
export const HomePg = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navigation />
            <Hero />
            <AboutMe />
            <LatestCreations />
            <Footer />
            
        
        </div>
    )
}