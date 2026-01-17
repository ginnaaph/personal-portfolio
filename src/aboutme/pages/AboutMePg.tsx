import { Navigation } from "../../components/ui/navigation/Navigation";
import { AboutMeIntroduction } from "../components/AboutMeIntroduction";
import AboutMeImage from '../../assets/images/me/AboutMe.png';
import {Footer } from "../../home/components/Footer";

export const AboutMePg = () => {
    return (
        <div className="min-h-screen  flex flex-col ">
            <Navigation />
            <div className="py-6 flex-1 px-4 sm:px-6 lg:px-8 bg-accent-2/60">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="p-5 bg-white rounded-2xl shadow-sm mb-8 text-center md:text-left"> 
                    <h1>About Me</h1></div>
                    <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 lg:gap-20 text-left ">
                      
                        <div className="w-full md:flex-1 md:max-w-2xl lg:max-w-3xl">
                            <AboutMeIntroduction />
                        </div>
                       <div className="w-full md:w-auto md:flex-none flex justify-center md:justify-end pt-10 pr-10" >
  <div
    className="
      mt-10
      w-48 h-60
      sm:w-56 sm:h-72
      md:w-64 md:h-80
      lg:w-72 lg:h-96
      bg-accent-2
      overflow-hidden
      shadow-sm
      ring-1 ring-border/40
      rounded-[9999px_9999px_16px_16px]
    "
  >
    <img
      src={AboutMeImage}
      alt="About Me portrait"
      className="h-full w-full object-cover object-top scale-100"
    />
  </div>
</div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}