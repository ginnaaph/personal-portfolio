import { Navigation } from "@/components/ui/navigation/Navigation";
import ExperienceHeader from "@/experiences/components/ExperienceHeader";
import ExperienceTimeline from "@/experiences/components/ExperienceTimeline";
import { experienceData } from "@/data/experienceData";

export default function ExperiencePg() {
    return (
    
        <section id="experiences" className="flex flex-col items-center justify-start">
            <Navigation />
            <div className=" flex flex-col gap-10">
                <ExperienceHeader />
                <ExperienceTimeline items={experienceData} />
            </div>
        </section>
    );
}