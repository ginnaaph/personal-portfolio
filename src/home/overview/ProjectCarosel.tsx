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
          <h2 className="text-center text-4xl font-bold py-10 w-full">Latest Projects</h2>
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
    title: "Purrfect Day",
    src: "src/assets/images/projects/purrfectday.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl w-full">
        <h3 className="text-lg font-semibold">Purrfect Day</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          A playful cat adoption app built with React + Tailwind. Features search, favorites, and shareable profiles.
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Stack: React, Vite, Tailwind</li>
          <li>Focus: delightful micro-interactions</li>
          <li>Outcome: faster browsing and better match discovery</li>
        </ul>
      </div>
    ),
  },
  {
    category: "art",
    title: "Christmas Cookies ",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          A cozy illustration series exploring holiday cookies, texture, and warm lighting.
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Medium: Procreate + Adobe Illustrator</li>
          <li>Focus: texture and composition</li>
          <li>Outcome: cohesive festive set with print-ready assets</li>
        </ul>
      </div>
    ),
  },
  {
    category: "baking",
    title: "my signature brown butter white chocolate chip cookies",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          Concept launch microsite highlighting product features with subtle motion and depth.
        </p>
        <ul className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <li>Stack: React, Framer Motion</li>
          <li>Focus: performance + accessibility</li>
          <li>Outcome: smooth storytelling with clear CTAs</li>
        </ul>
      </div>
    ),
  },

]
