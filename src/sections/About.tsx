import {motion} from "motion/react"
const About = () => {
  return (
    <section id="about" className="scroll-mt-24 grid md:grid-cols-2 grid-cols-1 max-h-[80vh]">
    <div className=" ">
      <div className="bg-primary">
        <motion.h2 
        initial={{ opacity: 0, x: "-40px" }}
        whileInView={{ opacity: 1, x: 0, transition:{duration:1, type:"spring"} }}
        className="text-5xl md:text-8xl font-bold mb-8 bg-transparent text-background px-4">About Me</motion.h2>
      </div>
      <div className="space-y-4 px-4 mb-3 md:mb-0">
        <p className="text-lg text-muted-foreground">
          With a solid foundation in computer science and experience in
          managing student-focused projects, I specialize in developing
          scalable applications using modern technologies like <b className="text-primary ">React
          Native, MERN, Next15, Firebase, and ExpressJS</b>. I'm enthusiastic
          about creating seamless user experiences and tackling
          challenging problems.
        </p>
        <p className="text-lg text-muted-foreground">
          When I'm not coding, I enjoy exploring the latest technologies,
          contributing to project management efforts, and sharing
          knowledge gained from certifications like <b className="text-primary ">Full-stack development.</b>{" "}
          Also I am a <b className="text-primary ">Anime Fan</b> too.
        </p>
      </div>
    </div>
      <div className="max-h-[83.5%] relative  overflow-hidden">
        
        <motion.img initial={{ translateX: "100px" }}
        whileInView={{translateX: 0,transition:{duration:1, type:"spring"} }}
        style={{}}
        className="block w-full h-full object-cover object-top" src="/mayank.jpg" />
      </div>
  </section>
  )
}

export default About