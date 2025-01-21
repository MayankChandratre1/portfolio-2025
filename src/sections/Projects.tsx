import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Globe } from 'lucide-react'
import {motion} from "motion/react"
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
    live:"https://typora-nine.vercel.app/landingpage",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1734625982/ddra3uaqdmii619eupee.png",
  },
  {
    title: "NoConvo - AI Chat App",
    description:
    "A chat app made with firebase featuring an AI partner for you.",
    tech: ["Next.js", "TypeScript", "Firebase", "TailwindCSS", "Gemini"],
    link: "https://github.com/MayankChandratre1/chat-app-firebase",
    live: "https://chatapp-4db2b.web.app/",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1734626355/xgcvav4jdsqhojsmirwn.png",
  },
  {
    title: "X Bot - AI Bot",
    description:
    "A bot which posts Ai generated tweets every 2 hours.",
    tech: ["Nodejs", "Javascript", "X Api","Gemini", "QStash"],
    link: "https://github.com/MayankChandratre1/tweeterBot",
    live: "https://x.com/code_D_dragon",
    image: "https://res.cloudinary.com/dvsl1aslo/image/upload/v1737462723/ACTION_1_znmubc.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 md:max-h-[80vh] ">
          <h2 className="text-5xl md:text-8xl font-bold mb-8 bg-primary text-background px-4">Projects</h2>
          <motion.div 
          initial={{ x: -100 }}
          whileInView={{ x: 0, transition:{duration:1, type:"spring"} }}
          className="grid md:grid-cols-3 gap-6 px-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 "
              >
                <img 
                  src={project.image}
                  className='w-[100%]  object-cover object-center rounded-lg mb-4'
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="secondary">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> View Project
                  </a>
                </Button>
                {
                  project.live && <Button asChild variant="default">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex ml-2 items-center gap-2 bg-primary text-background"
                  >
                    <Globe className="h-4 w-4" /> Live
                  </a>
                </Button>
                }
              </Card>
            ))}
          </motion.div>
        </section>
  )
}

export default Projects