import {motion} from "motion/react"
import { useEffect, useState } from "react";

const Hero = () => {
  const text = ["Full-Stack Dev", "Front-end Dev", "Back-end Dev"];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % text.length);
    }, 3000);

    return () => clearInterval(interval);
  },[])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-primary">Mayank</span>
          <br />
          <span className="text-muted-foreground">a passionate</span>{" "}
          
          <motion.span
            key={currentText}
            initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            className="inline-block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-extrabold relative"
          >
            {text[currentText]}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I craft digital experiences that make a difference. From concept to deployment, 
          I build solutions that users love and businesses need.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => window.scrollTo({ top: document.getElementById("experience")?.offsetTop || 0, behavior: "smooth" })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200"
              onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero