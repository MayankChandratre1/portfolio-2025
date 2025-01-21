"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Funmate",
    period: "Sep 2024 - Oct 2024",
    description:
      "Built a ReactNative Application from scratch. Integrated Firebase database and authentication at backend. Built a realtime chat and push notification system for the app",
    details: [
      "Developed user authentication system using Firebase Auth",
      "Implemented real-time chat functionality with Firebase Realtime Database",
      "Created push notification system using Firebase Cloud Messaging",
      "Optimized app performance, reducing load time by 30%",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Mayank Chandratre",
    period: "Aug 2024 - Present",
    description:
      "10+ projects completed. Worked on various technologies like React, Next, Node, Express, Postgres, MongoDB, AWS, Docker, etc.",
    details: [
      "Developed and deployed 5 e-commerce platforms using Next.js and Stripe",
      "Created 3 custom CMS solutions with Node.js and MongoDB",
      "Implemented CI/CD pipelines using GitHub Actions and Docker",
      "Optimized database queries, improving response times by up to 50%",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <motion.section
      id="experience"
      className="scroll-mt-24  py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-5xl md:text-8xl font-bold mb-8 bg-primary text-background px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Work Experience
      </motion.h2>
      <motion.div className="space-y-8 px-4" variants={containerVariants} initial="hidden" animate="visible">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-card text-card-foreground rounded-lg shadow-sm p-6 hover:shadow-md border-2 transition-shadow duration-300"
            variants={cardVariants}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {exp.company} • {exp.period}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
                aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
              >
                {expandedIndex === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm mb-4">{exp.description}</p>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="list-disc list-inside text-sm space-y-2 mt-4">
                    {exp.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Experience

