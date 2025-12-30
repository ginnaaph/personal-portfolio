import { Navigation } from "../../components/ui/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../components/AboutMe.tsx"
import { Footer } from "../components/Footer.tsx"
import { ContactCTA } from "../components/ContactCTA.tsx"
import LatestCardSlider from "../overview/LatestCardSlider"
export const HomePg = () => {
    return (
        <div id="home" className="flex flex-col items-center justify-center">
            <Navigation />
            <Hero />
            
            <AboutMe />
            <div className=" px-4 py-10 bg-main">
                <LatestCardSlider />
            </div>
            <ContactCTA />
            <Footer />
            
        
        </div>
    )
}