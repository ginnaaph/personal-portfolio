import { IntroductionBlurb } from "./IntroductionBlurb";
export const ExplorationHeader =() => { 
    return (
        <div className="flex flex-col items-start justify-start p-8 ">
           
            <IntroductionBlurb />
            <div className="text-left max-w-4xl mt-4 px-4 space-y-2">
                <ul className="space-y-3 mt-2"> Here is a collections of what my curiosity has led me to create over time:
                <li className="mt-2">🖌 Art created with ink, watercolor,  gouache, color pencils, and graphite.</li>
                <li>💻 Coding projects built using TailwindCSS, Vite, React, Electron, JavaScript, and Python.</li>
                <li>🎨 Digital designs brought to life with Procreate and Adobe Illustrator.</li>
                <li>👩🏻‍🍳 Baking recipes I tried out.</li>
                </ul>
            <p className="mt-2">
            Each project is a reflection of my curiosity, whether I'm sketching by hand or writing code, 
            I am always looking for new ways to bring ideas to life.
            </p>
            </div>
    
        </div>
    );
}