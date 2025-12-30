import { ExplorationRotatingText } from "@/components/ui/text/RotatingText";

export const IntroductionBlurb = () => {
    const text = ['build.', 'paint.', 'draw.', 'code.', 'create.', 'innovate.', 'explore.'];
    return (
<>

    <div className="text-4xl font-montserrat leading-relaxed max-w-5xl font-semibold text-left px-2 flex justify-start">Come <span>
    <ExplorationRotatingText
        delay={0}
        y={10}
        duration={3000}
        text={text}
    /></span>
    </div>
    <div className="px-2 text-left">
        
    with me on a journey of creativity, learning, and exploration.
    </div>
    


</>)};