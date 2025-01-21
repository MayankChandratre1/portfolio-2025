import {motion} from "motion/react"
import { useEffect, useState } from "react";

const Hero = () => {
  const text = ["FullStackDev", "FrontendDev", "BackendDev"];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % text.length);
    }, 2000);

    return () => clearInterval(interval);
  },[])

  return (
    <section className="min-h-[80vh] overflow-x-hidden flex flex-col justify-center animate-in fade-in duration-700 px-4">
    
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
    Mayank is a {" "}

    <motion.span
        initial={{translateX: -1000}}
        animate={{
            translateX: 0,
            transition:{
                type: "spring",
            }
        }}
        className="inline-block bg-primary italic text-background font-bold"
    >{text[currentText]}</motion.span>
    
    </h1>
    <p className="text-xl text-muted-foreground max-w-2xl">
      I'm a full-stack developer passionate about creating beautiful and
      functional web applications that solve real problems.
    </p>
  </section>
  )
}

export default Hero