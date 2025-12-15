import AboutMeImage from '../assets/images/computer.png'
export const AboutMe = () => { 
    return (
        <div className="flex p-20 mt-10">
             <img src={AboutMeImage} className="w-70 h-70 mt-20" alt="aboutMeImage" />

    <div className="flex flex-col align-items-center w-5/6 p-20 justify-content-center "> 
        <div className="text-3xl"> A litte about the curious mind behind the page... </div>
        <div className="flex justify-center">Welcome! I'm Gina, a lifelong learner, self-starter, and creative builder with a deep love for figuring 
            things out. This portfolio is more than a collection of work, it's a reflection of who I am. Curiousity is the 
            heart of my personal brand. It is what led to me teach myself how to code, to draw and paint, and to explore how 
            systems, people, and ideas connect. Whether it's refining a process, designing a solution, or experimenting with 
            something new, I'm always askings "How does this work?" and "How can we make it better?" Here, you'll find the Projects
            I've created along the way, each one is a small chaptr in my journey of learning, building, and growing through curiousity.
        </div>
    </div>
       
    </div>
    )
}