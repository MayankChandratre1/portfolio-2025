"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
	title: "Application/Full Stack Developer",
	company: "Yash Classes",
	period: "Jan 2025 - Present",
	description:
		"Developed a full-featured Android application using React Native, serving 6K+ active users. Built and maintained robust backend APIs with integrations and secure authentication.",
	details: [
		"Published app to Play Store — https://play.google.com/store/apps/details?id=com.yashclasses.counselling",
		"Developed the app in React Native with seamless UI/UX and integrated native modules",
		"Built scalable backend APIs integrated with OneSignal (notifications), BulkSMS (OTP), and Razorpay (payments)",
		"Implemented secure OTP-based authentication with Role-Based Access Control (RBAC)",
		"Created a custom admin CRM dashboard for dynamic content management and user analytics",
		"Used GitHub Actions for CI/CD and deployed services to AWS with Firebase and Redis",
	],
}
,
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

const Experience = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<section
			id="experience"
			className="scroll-mt-24 py-20 px-4 relative overflow-hidden"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background -z-10" />

			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
			</div>

			<div className="max-w-4xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
						Work Experience
					</h2>
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
						className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"
					/>
				</motion.div>

				{/* Experience Cards */}
				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 rounded-xl p-6 transition-all duration-300 group relative overflow-hidden"
						>
							{/* Card background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="relative z-10">
								<div className="flex justify-between items-start mb-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
											<h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
												{exp.title}
											</h3>
										</div>
										<p className="text-primary font-semibold mb-1">
											{exp.company}
										</p>
										<p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block">
											{exp.period}
										</p>
									</div>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => toggleExpand(index)}
										className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
									>
										{expandedIndex === index ? (
											<ChevronUp className="h-4 w-4" />
										) : (
											<ChevronDown className="h-4 w-4" />
										)}
									</Button>
								</div>

								<p className="text-muted-foreground leading-relaxed mb-4">
									{exp.description}
								</p>

								<AnimatePresence>
									{expandedIndex === index && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="border-t border-border/50 pt-4"
										>
											<h4 className="font-semibold mb-3 text-primary">
												Key Achievements:
											</h4>
											<ul className="space-y-2">
												{exp.details.map((detail, detailIndex) => (
													<motion.li
														key={detailIndex}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: detailIndex * 0.1 }}
														className="flex items-start gap-3 text-sm text-muted-foreground"
													>
														<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
														<span>{detail}</span>
													</motion.li>
												))}
											</ul>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience

