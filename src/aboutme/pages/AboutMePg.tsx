import { Navigation } from "../../components/ui/navigation/Navigation";
import { AboutMeIntroduction } from "../components/AboutMeIntroduction";
import AboutMeImage from '../../assets/images/me/AboutMe.png';
import {Footer } from "../../home/components/Footer";

export const AboutMePg = () => {
    return (
        <div className="min-h-screen bg-red-50 flex flex-col">
            <Navigation />
            <div className="py-6 flex-1 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 lg:gap-20 text-left">
                        <div className="w-full md:flex-1 md:max-w-2xl lg:max-w-3xl">
                            <AboutMeIntroduction />
                        </div>
                        <div className="w-full md:w-auto md:flex-none flex justify-center md:justify-end">
                            <div className="overflow-hidden rounded-t-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-80 lg:w-72 lg:h-96 shadow-sm ring-1 ring-border/40 bg-white mt-10">
                                <img src={AboutMeImage} alt="About Me portrait" className="w-full h-full object-top scale-115" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}