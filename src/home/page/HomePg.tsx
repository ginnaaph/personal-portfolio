import { Navigation } from "../../components/ui/navigation/Navigation"
import { Hero } from "../hero/HeroSection"
import {AboutMe } from "../components/AboutMe.tsx"
import { Footer } from "../components/Footer.tsx"
import { ContactCTA } from "../components/ContactCTA.tsx"
import LatestCardSlider from "../overview/LatestCardSlider"
export const HomePg = () => {
  return (
    <div id="home" className="min-h-screen w-full">
      <Navigation />
      <Hero />
      <AboutMe />

      <section className="w-full bg-accent-1 px-4 py-15">
        <div className="mx-auto w-full max-w-5xl">
          <LatestCardSlider />
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  )
}
