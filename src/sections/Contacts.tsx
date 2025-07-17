import { Card } from '@/components/ui/card'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, Mail, Send } from 'lucide-react'
import { motion } from "motion/react"

const contacts = [
	{
		name: "Email",
		icon: <Mail className="h-5 w-5" />,
		href: "mailto:mayankmchandratre@gmail.com",
		label: "mayankmchandratre@gmail.com",
		color: "hover:bg-blue-500/10 hover:border-blue-500/30"
	},
	{
		name: "LinkedIn",
		icon: <Linkedin className="h-5 w-5" />,
		href: "https://www.linkedin.com/in/mayankchandratre/",
		label: "Connect on LinkedIn",
		color: "hover:bg-blue-600/10 hover:border-blue-600/30"
	},
	{
		name: "Twitter",
		icon: <TwitterLogoIcon className="h-5 w-5" />,
		href: "https://x.com/chandratrem91",
		label: "Follow on Twitter",
		color: "hover:bg-sky-500/10 hover:border-sky-500/30"
	},
	{
		name: "GitHub",
		icon: <GitHubLogoIcon className="h-5 w-5" />,
		href: "https://github.com/MayankChandratre1",
		label: "View on GitHub",
		color: "hover:bg-gray-500/10 hover:border-gray-500/30"
	}
]

const Contacts = () => {
	return (
		<section id="contact" className="scroll-mt-24 py-20 px-4 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background -z-10" />

			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				<div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
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
						Get In Touch
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						I'm always open to new opportunities and interesting projects.
						Let's connect and create something amazing together!
					</p>
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
						className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Contact Card */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Card className="p-8 bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
						{/* Card background gradient */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						<div className="relative z-10 space-y-8">
							{/* Main CTA */}
							<div className="text-center">
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.4, duration: 0.6 }}
									viewport={{ once: true }}
									className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
								>
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
									Available for freelance work
								</motion.div>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5, duration: 0.6 }}
									viewport={{ once: true }}
									className="text-muted-foreground mb-6"
								>
									Ready to bring your ideas to life? Let's discuss your next project!
								</motion.p>
							</div>

							{/* Contact Methods */}
							<div className="grid md:grid-cols-2 gap-4">
								{contacts.map((contact, index) => (
									<motion.a
										key={contact.name}
										href={contact.href}
										target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
										rel={contact.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.02 }}
										className={`flex items-center gap-4 p-4 rounded-xl border border-border/30 ${contact.color} transition-all duration-300 group/item`}
									>
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-300">
											{contact.icon}
										</div>
										<div className="flex-1">
											<h3 className="font-semibold group-hover/item:text-primary transition-colors duration-300">
												{contact.name}
											</h3>
											<p className="text-sm text-muted-foreground">
												{contact.label}
											</p>
										</div>
										<Send className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors duration-300" />
									</motion.a>
								))}
							</div>

							{/* Quick Social Links */}
							<div className="flex justify-center gap-4 pt-4 border-t border-border/30">
								{contacts.map((contact, index) => (
									<motion.a
										key={`social-${contact.name}`}
										href={contact.href}
										target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
										rel={contact.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.2, y: -5 }}
										className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
									>
										{contact.icon}
									</motion.a>
								))}
							</div>
						</div>
					</Card>
				</motion.div>

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

export default Contacts