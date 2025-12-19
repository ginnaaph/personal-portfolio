import { ExplorationRotatingText } from "@/components/RotatingText";

export const IntroductionBlurb = () => {
    const text = ['build.', 'paint.', 'draw.', 'code.', 'create.', 'innovate.', 'explore.'];
    return (
<>

    <div className="text-4xl font-montserrat leading-relaxed max-w-4xl mx-auto mt-10 text-center px-4 flex">Come <span>
    <ExplorationRotatingText
        delay={0}
        y={10}
        duration={3000}
        text={text}
    /></span>
    </div>
    <div className="px-4 text-center">
        
    with me on a journey of creativity and discovery as we explore new ideas and push the boundaries of innovation together.
    </div>
    


</>)};