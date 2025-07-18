import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from "motion/react"

const projects = [
  {
    title: "Typora",
    description: "Full Stack Blog app inspired by Medium.",
    tech: [
      "Nextjs",
      "PostgreSQL",
      "Cloudinary",
      "Typescript"
    ],
    link: "https://github.com/MayankChandratre1/typora",
    live: "https://typora-nine.vercel.app/landingpage",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1734625982/ddra3uaqdmii619eupee.png",
  },
  {
    title: "NoConvo - AI Chat App",
    description: "A chat app made with firebase featuring an AI partner for you.",
    tech: ["Next.js", "TypeScript", "Firebase", "TailwindCSS", "Gemini"],
    link: "https://github.com/MayankChandratre1/chat-app-firebase",
    live: "https://chatapp-4db2b.web.app/",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1734626355/xgcvav4jdsqhojsmirwn.png",
  },
  {
    title: "X Bot - AI Bot",
    description: "A bot which posts Ai generated tweets every 2 hours.",
    tech: ["Nodejs", "Javascript", "X Api", "Gemini", "QStash"],
    link: "https://github.com/MayankChandratre1/tweeterBot",
    live: "https://x.com/code_D_dragon",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1737462723/ACTION_1_znmubc.png",
  },
  {
    title: "FirmFlow - Payroll Management",
    description: "A comprehensive payroll management system for businesses.",
    tech: ["Angular", "Typescript", ".NET 9", "C#", "PostgreSQL"],
    link: "https://github.com/MayankChandratre1/FirmFlowFrontend",
    live: "https://firm-flow-frontend.vercel.app/",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1752843803/ACTION_4_jhrwji.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden bg-background/50 backdrop-blur-sm">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Live indicator */}
                  {project.live && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Live
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    {project.live && (
                      <Button 
                        asChild 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 transition-colors duration-200"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
            asChild
          >
            <a
              href="https://github.com/MayankChandratre1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects