import purrFectDay from '../../assets/images/projects/purrfectday.png';
import wcCookies from '../../assets/images/baking/wcc.png';
import japaneseStore from '../../assets/images/art/JapaneseStore.png';
import dubaiChocolate from '../../assets/images/baking/dubaiChocolate.png';

export const projects = [
  {
    category: "programming",
    title: "purrfect day",
    src: purrFectDay,
    content: (
      <div className="bg-[#DAD0DC] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl w-full">
        <h3 className="text-lg text-[#775d68] font-semibold">Purrfect Day</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          A playful cat adoption app built with React + Tailwind. Features search, favorites, and shareable profiles.
        </p>
        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <p>Stack: React, Vite, TypeScript TailwindCSS</p>
          <p>Focus: delightful micro-interactions</p>
          <p></p>
        </div>
      </div>
    ),
  },
  {
    category: "art",
    title: "japanese storefront - watercolor ",
    src: japaneseStore,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
    
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
          watercolor painting of a tradtional jaoanese storefront. 
        </p>
        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <p>Medium: Watercolor + Ink </p>
          <p>Outcome: cohesive festive set with print-ready assets</p>
        </div>
      </div>
    ),
  },
  {
    category: "baking",
    title: "my signature brown butter white chocolate chip cookies",
    src: wcCookies,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
         my go to recipe for a brown butter white chocolate chip cookie.
        </p>
        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          <p>Ingredients: butter, sugar, eggs, vanilla, flour, baking soda, salt, white chocolate chips</p>
        
        </div>
      </div>
    ),
  },
   {
    category: "baking",
    title: "dubai inspired chocolate cake",
    src: dubaiChocolate,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-sans max-w-3xl mx-auto">
        my take on a the dubai chocolate, but in cake form. 
        </p>
        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
          
        
        </div>
      </div>
    ),
  },
  

]