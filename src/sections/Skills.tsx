import { Card } from '@/components/ui/card'
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
const skills = [
    {
      category: "Frontend",
      items: [<ReactIcon />, <TS />, <Tailwind />, <Next />],
    },
    {
      category: "Backend",
      items: [<Node />, <Express />, <Postgres />, <Mongo />],
    },
    { category: "Tools", items: [<Git/>,<AWS />, <Docker />] },
  ];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 md:pt-0 gap-1 ">
          <h2 className="text-5xl md:text-8xl font-bold mb-8  text-background px-4 bg-primary">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {skills.map((skillGroup) => (
              <Card
                key={skillGroup.category}
                className="p-6 animate-in fade-in slide-in-from-bottom duration-700"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <div className="min-w-10 h-10 bg-muted-foreground/5 p-2 rounded-lg hover:bg-muted-foreground/10" key={index} >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* {skills.map((skillGroup) => (
            <div className=' min-h-24 border-2 border-black'>
                <h3 className='bg-primary px-2 py-3 text-2xl md:text-3xl text-background'>
                    {skillGroup.category}
                </h3>
                <div className="grid grid-cols-4">
                    {skillGroup.items.map((skill, index) => (
                        <div className={`min-w-10 p-2  ${"bg-background"}`} key={index} >
                            {skill}
                        </div>
                    ))}
                    </div>
            </div>
          ))} */}


        </section>
  )
}

export default Skills