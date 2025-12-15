import HeroImage from '../../assets/images/hellohero.png'
export const Hero = () => {
    return (
        <div className="flex items-center justify-content-center justify-center p-5 mt-10 ml-20">
           
                <img src={HeroImage} alt="hero" className="w-50 h-50" />
                <div className="flex flex-col items-start">
                <h1 className="font-montserrat text-3xl font-bold">          Hi, I am Gina!</h1>
           <p> a curious builder with a love for solving problems and creating meaningful things, from code to art.</p>
                </div>
            </div>

      
    )
}