import HeroImage from '../../assets/images/me/hellohero.png'
import {  } from '@/components/ui/text/HighlightedText'
import { ViewProjectsBtn } from '@/components/ui/ViewProjectsBtn'
import { TypingAnimation } from '@/components/ui/text/typing-animation'
export const Hero = () => {
    return (
        <div className="flex items-center justify-content-center w-full justify-center bg-white pb-40">
                <div className="flex flex-row items-center justify-center p-20 mt-10 ml-10 justify-contents-center">
                <img src={HeroImage} alt="hero" className="w-50 h-50 rounded-full" />
                <div className="flex flex-col items-start">
                <div className=" text-3xl italic  ">  Hi, there! </div>
              <TypingAnimation className="text-5xl font-bold  text-accent-2 font-monserrat"> I'm Gina!  </TypingAnimation>
           <p className="text-xl mt-1"> a curious builder with a love for solving problems and creating meaningful things, from code to art.</p>
              <div className="mt-10 items-center "> 
           
                <ViewProjectsBtn />
              </div>
                </div>
                    </div>
                   
                </div>

      
    )
}