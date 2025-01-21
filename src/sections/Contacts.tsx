import { Card } from '@/components/ui/card'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, Mail } from 'lucide-react'
import {motion} from "motion/react"

const Contacts = () => {
  return (
    <section id="contact" className="scroll-mt-24 px-4 pt-24 ">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="p-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
            <div className="space-y-6">
              <p className="text-lg text-center text-muted-foreground">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </p>
              <div className="flex justify-center gap-4">
                <motion.button 
                whileHover={{ scale: 1.5, y: -10 }}
                className='bg-primary text-background w-8 h-8 grid place-items-center rounded-full'>
                  <a
                    href="mailto:mayankmchandratre@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> 
                  </a>
                </motion.button>
                <motion.button  
                whileHover={{ scale: 1.5, y: -10 }}
                className='bg-primary text-background w-8 h-8 grid place-items-center rounded-full'>
                  <a
                    href="https://www.linkedin.com/in/mayankchandratre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> 
                  </a>
                </motion.button>
                <motion.button  
                whileHover={{ scale: 1.5, y: -10 }}
                className='bg-primary text-background w-8 h-8 grid place-items-center rounded-full'>
                  <a
                    href="https://x.com/chandratrem91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <TwitterLogoIcon className="h-4 w-4" /> 
                  </a>
                </motion.button>
                <motion.button  
                whileHover={{ scale: 1.5, y: -10 }}
                className='bg-primary text-background w-8 h-8 grid place-items-center rounded-full'>
                  <a
                    href="https://github.com/MayankChandratre1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <GitHubLogoIcon className="h-4 w-4" /> 
                  </a>
                </motion.button>

              </div>
            </div>
          </Card>
        </section>
  )
}

export default Contacts