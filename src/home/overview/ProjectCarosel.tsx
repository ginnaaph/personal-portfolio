"use client";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

export function ProjectCarousel() {
  const cards = projects.map((project, index) => (
    <Card key={project.src} card={project} index={index} />
  ));

  return (
     <div className="mt-16 w-full  py-12">
        <div className="mx-auto  w-full px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl w-full px-4">
            <div className="rounded-2xl bg-[#775d68] w-full">
          <div className="text-center text-4xl text-[#DAD0DC] pt-10  w-full">Latest Creations</div>
              <Carousel items={cards} />
            </div>
          </div>
        </div>
    </div>
  );
}

// Each project card shows a concise overview panel when active

const projects = [
  {
    category: "programming",
    title: "purrfect day",
    src: "src/assets/images/projects/purrfectday.png",
    content: (
      <div className="bg-[#DAD0DC] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl w-full">
        <h3 className="text-lg text-[#775d68] font-semibold">Purrfect Day</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          A playful cat adoption app built with React + Tailwind. Features search, favorites, and shareable profiles.
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Stack: React, Vite, TypeScript TailwindCSS</li>
          <li>Focus: delightful micro-interactions</li>
          <li>Outcome: faster browsin,g and better match discovery</li>
        </ul>
      </div>
    ),
  },
  {
    category: "art",
    title: "japanese storefront - watercolor ",
    src: "src/assets/images/art/JapaneseStore.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
    
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          watercolor painting of a tradtional jaoanese storefront. 
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Medium: Watercolor + Ink </li>
          <li>Outcome: cohesive festive set with print-ready assets</li>
        </ul>
      </div>
    ),
  },
  {
    category: "baking",
    title: "my signature brown butter white chocolate chip cookies",
    src: "src/assets/images/baking/wcc.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
         my go to recipe for a brown butter white chocolate chip cookie.
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Ingredients: butter, sugar, eggs, vanilla, flour, baking soda, salt, white chocolate chips</li>
        
        </ul>
      </div>
    ),
  },

]
