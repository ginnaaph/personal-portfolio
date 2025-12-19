import HeroImage from '../../assets/images/hellohero.png'
import { HighlightedText } from '@/components/HighlightedText'



export const Hero = () => {
    const text = "Gina"
    return (
        <div className="flex items-center justify-content-center w-full justify-center bg-white">
                <div className="flex flex-row items-center justify-center p-20 mt-10 ml-10 justify-contents-center">
                <img src={HeroImage} alt="hero" className="w-50 h-50 rounded-full" />
                <div className="flex flex-col items-start">
                <h1 className="text-3xl italic">  Hi, there! </h1>
                <p className="font-montserrat text-4xl font-bold tracking-wide">I'm <HighlightedText text={text} /> </p>
           <p className="text-xl"> a curious builder with a love for solving problems and creating meaningful things, from code to art.</p>
                </div>
                    </div>
                </div>

      
    )
}