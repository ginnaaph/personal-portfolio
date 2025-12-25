import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../components/AboutMe.tsx"
import { Footer } from "../components/Footer.tsx"
import { LatestCreations } from "../overview/LatestCreation.tsx"
import { ContactCTA } from "../components/ContactCTA.tsx"
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