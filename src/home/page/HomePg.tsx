import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../AboutMe"
export const HomePg = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navigation />
            <Hero />
            <AboutMe />
            
        
        </div>
    )
}