import { Card } from '@/components/ui/card'
import { motion } from 'motion/react'
import ReactIcon from "@/components/icons/React";
import Next from "@/components/icons/Next";
import TS from "@/components/icons/TS";
import Tailwind from "@/components/icons/Tailwind";
import Node from "@/components/icons/Node";
import Express from "@/components/icons/Express";
import Postgres from "@/components/icons/Postgres";
import Mongo from "@/components/icons/Mongo";
import Git from "@/components/icons/Git";
import Docker from "@/components/icons/Docker";
import AWS from "@/components/icons/AWS";
import ReactNative from "@/components/icons/ReactNative";
import Angular from "@/components/icons/Angular";
import ASP from "@/components/icons/ASP";
import Firebase from "@/components/icons/Firebase";
import GenAI from "@/components/icons/GenAI";

const skills = [
  {
    category: "Frontend",
    items: [
      { icon: <ReactIcon />, name: "React" },
      { icon: <TS />, name: "TypeScript" },
      { icon: <Tailwind />, name: "Tailwind CSS" },
      { icon: <Next />, name: "Next.js" },
      { icon: <ReactNative />, name: "React Native" },
      { icon: <Angular />, name: "Angular" }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    items: [
      { icon: <Node />, name: "Node.js" },
      { icon: <Express />, name: "Express" },
      { icon: <Postgres />, name: "PostgreSQL" },
      { icon: <Mongo />, name: "MongoDB" },
      { icon: <ASP />, name: "ASP.NET" }
    ],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "Tools",
    items: [
      { icon: <Git />, name: "Git" },
      { icon: <AWS />, name: "AWS" },
      { icon: <Docker />, name: "Docker" },
      { icon: <Firebase />, name: "Firebase" },
      { icon: <GenAI />, name: "GenAI" }
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                {/* Card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <h3 className="text-2xl font-bold">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group/item"
                      >
                        <div className="w-12 h-12 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-center group-hover/item:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills