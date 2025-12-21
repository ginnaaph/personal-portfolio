import { ExplorationRotatingText } from "@/components/RotatingText";

export const IntroductionBlurb = () => {
    const text = ['build.', 'paint.', 'draw.', 'code.', 'create.', 'innovate.', 'explore.'];
    return (
<>

    <div className="text-4xl font-montserrat leading-relaxed max-w-5xl mt-5 text-left px-4 flex justify-start">Come <span>
    <ExplorationRotatingText
        delay={0}
        y={10}
        duration={3000}
        text={text}
    /></span>
    </div>
    <div className="px-4 text-left">
        
    with me on a journey of creativity, learning, and exploration.
    </div>
    


</>)};