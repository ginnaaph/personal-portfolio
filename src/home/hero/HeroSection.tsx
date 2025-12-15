import HeroImage from '../../assets/images/hellohero.png'
export const Hero = () => {
    return (
        <div className="flex items-center justify-content-center justify-center">
           
                <img src={HeroImage} alt="hero" className="w-50 h-50" />
                <div className="flex flex-col items-start">
                <p>          Hello there, I am Gina!</p>
           <p> a curious builder with a love for solving problems and creating meaningful things, from code to art.</p>
                </div>
            </div>

      
    )
}