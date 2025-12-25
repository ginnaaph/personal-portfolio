import type { ComponentType } from "react"
import { SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiPython, SiHtml5, SiCss3 } from "react-icons/si"

const IconBrandJavascript = SiJavascript;
const IconBrandTypescript = SiTypescript;
const IconBrandReact = SiReact;
const IconBrandVite = SiVite;
const IconBrandTailwind = SiTailwindcss;
const IconBrandPython = SiPython;
const IconBrandHtml5 = SiHtml5;
const IconBrandCss3 = SiCss3;


export type IconStackItem = {
    icon: ComponentType<{ size?: number; color?: string; title?: string }>;
   
    color?: string;
};

const iconTechStacks: IconStackItem[] = [
    { icon: IconBrandJavascript, color: "#F7DF1E" },
    { icon: IconBrandTypescript, color: "#3178C6" },
    { icon: IconBrandReact, color: "#61DBFB" },
    { icon: IconBrandVite, color: "#646CFF" },
    { icon: IconBrandTailwind, color: "#38B2AC" },
    { icon: IconBrandPython, color: "#3776AB" },
    { icon: IconBrandHtml5, color: "#E34F26" },
    { icon: IconBrandCss3, color: "#1572B6" },
];

export const IconStack = () => {
    return (
        <div className="w-full flex items-center justify-center gap-2 md:gap-4 py-2">
            {iconTechStacks.map(({ icon: Icon, color }) => (
                <div key={color} className="flex flex-col items-center select-none">
                    <Icon size={18} color={color} />
                </div>
            ))}
        </div>
    )
}