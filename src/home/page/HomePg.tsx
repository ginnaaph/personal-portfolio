import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../AboutMe"
import { Footer } from "../Footer"
import { LatestCreations } from "../overview/LatestCreation.tsx"
import { ContactCTA } from "../ContactCTA"
export const HomePg = () => {
    return (
        <div id="home" className="flex flex-col items-center justify-center">
            <Navigation />
            <Hero />
            <AboutMe />
            <LatestCreations />
            <ContactCTA />
            <Footer />
            
        
        </div>
    )
}