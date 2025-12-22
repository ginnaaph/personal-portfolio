"use client";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import { projects } from "../data/ProjectData";

export function ProjectCarousel() {
  const cards = projects.map((project, index) => (
    <Card key={project.src} card={project} index={index} />
  ));

  return (
     <div className="relative -mt-px">
        <div className="mx-auto  w-full px-4 md:px-6 lg:px-8">
          <div className="w-full px-4">
            <div className="bg-[#775d68] w-full">
          <div className="text-center text-4xl text-[#DAD0DC] font-semibold pt-10 w-full">Latest Creations</div>
              <Carousel items={cards} />
            </div>
          </div>
        </div>
    </div>
  );
}



