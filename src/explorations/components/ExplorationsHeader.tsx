import { IntroductionBlurb } from "./IntroductionBlurb";
import { IconStack } from "./IconStacks";
export const ExplorationHeader =() => { 
    return (
        <div className="flex flex-col items-start mt-3 justify-start pb-9">
           
            <IntroductionBlurb />
              <p className="mt-2 ml-2">
            Each project is a reflection of my curiosity, whether I'm sketching by hand or writing code, 
            I am always looking for new ways to bring ideas to life.
            </p>
    
            <div className="text-left max-w-4xl  px-2 space-y-2 justify-content-center " > 
                
                <div className="p-1 mt-10"><span className="font-semibold text-lg text-main">Tech Stack:</span> <IconStack /></div>
                <ul className="space-y-3 mt-1 ml-3">
                <li className="mt-10">🖌 Art created with ink, watercolor,  gouache, color pencils, and graphite.</li>
                <li>💻 Coding projects built using TailwindCSS, Vite, React, Electron, JavaScript, and Python.</li>
                <li>🎨 Digital designs brought to life with Procreate and Adobe Illustrator.</li>
                <li>👩🏻‍🍳 Baking recipes I tried out.</li>
                </ul>
          
            </div>
    
        </div>
    );
}