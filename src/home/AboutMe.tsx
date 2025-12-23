import AboutMeImage from '../assets/images/computer.png'
import Signature from '../assets/images/signature.png'
import { AlbertEinsteinQuote } from './Quotes'
import { WaveDivider } from '@/components/ui/WaveDivider'
export const AboutMe = () => { 
    return (
        <section id="aboutme" className="relative bg-[#DAD0DC]">
        <WaveDivider color="white"  flip={false} className='-mb-px' />
         
        <div className="flex p-10 w-5/6 mx-auto">
             <img src={AboutMeImage} className="w-70 h-70 mt-20" alt="aboutMeImage" />

    <div className="flex flex-col align-items-center w-5/6 p-20 justify-content-center "> 
        <div  className="text-4xl"> A litte about me, <span className="text-[#7e738E] text-3xl italic font-['Noticia_Text']">the curious mind behind the page... </span></div>
        <div className="flex justify-center mt-2">Welcome! I'm Gina, a lifelong learner, self-starter, and creative builder with a deep love for figuring 
            things out. This portfolio is more than a collection of work, it's a reflection of who I am. Curiousity is the 
            heart of my personal brand. It is what led to me teach myself how to code, to draw and paint, and to explore how 
            systems, people, and ideas connect. Whether it's refining a process, designing a solution, or experimenting with 
            something new, I'm always askings "How does this work?" and "How can we make it better?" Here, you'll find the projects
            I've created along the way, each one is a small chapter in my journey of learning, building, and growing through curiousity.
        </div>
        <div className="flex justify-end">
        <div className="mt-2 text-right "> Thank you for stopping by!
            <img src={Signature} alt="signature" className=" w-40 h-20 mt-2"/>
             </div>
        </div>
        <div>
        <AlbertEinsteinQuote />
        </div>
    </div>
       </div>
    
      <WaveDivider color="#775d68" flip={true} className="-mt-px"/>
    </section>
    ) 
}