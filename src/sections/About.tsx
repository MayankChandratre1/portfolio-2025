import { motion } from "motion/react"

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                With a solid foundation in <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                  Computer Science
                </span> and experience in
                managing student-focused projects, I specialize in developing
                scalable applications using modern technologies like{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                  React Native, MERN, Next15, Firebase, and ExpressJS & More.
                </span>
                . I'm enthusiastic about creating seamless user experiences and tackling
                challenging problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                When I'm not coding, I enjoy exploring the latest technologies,
                contributing to project management efforts, and sharing
                knowledge gained from certifications like{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                  Full-stack development
                </span>
                . Also I am a{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                  Anime Fan
                </span>{" "}
                too.
              </motion.p>
            </div>

            {/* Stats or highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl group">
              {/* Image container with gradient overlay */}
              <div className="relative">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full h-[500px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  src="/mayank.jpg"
                  alt="Mayank - Full Stack Developer"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-lg" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About