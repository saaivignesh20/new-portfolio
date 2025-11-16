"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Mana.AI: AI Meeting Assistant",
    description:
      "AI-powered Chrome extension for Google Meet with real-time summarization, emotion detection, and transcription.",
    image: "/placeholder-project.svg",
    technologies: ["Chrome Extension", "AI/ML", "NestJS", "WebSockets", "Real-time"],
    github: "https://github.com/saaivignesh20",
    demo: null,
    featured: true,
    category: "Full-Stack AI Application",
  },
  {
    title: "TinkerPad: Smart Document Summarizer",
    description:
      "🏆 2nd Runner Up Award Winner - ChatGPT-4o powered conversational summarizer for PDFs, Excel, and Word documents.",
    image: "/placeholder-project.svg",
    technologies: ["Python", "ChatGPT-4o", "Groq API", "Streamlit", "NLP"],
    github: "https://github.com/saaivignesh20",
    demo: null,
    featured: true,
    category: "AI-Powered Tool",
  },
  {
    title: "Ramix: Cloud ESL Tags Platform",
    description:
      "Advanced cloud solution for managing Electronic Shelf Tags with an intuitive interface for retail operations.",
    image: "/placeholder-project.svg",
    technologies: ["Angular", "Node.js", "MongoDB", "AWS", "IoT"],
    github: null,
    demo: null,
    featured: true,
    category: "Full-Stack Development",
  },
  {
    title: "ConSource: E2E Procurement Software",
    description:
      "End-to-end digital procurement platform for managing demands, RFPs, contracts, and performance analytics.",
    image: "/placeholder-project.svg",
    technologies: ["React", "NestJS", "PostgreSQL", "AWS", "Analytics"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
  {
    title: "Improveo: Consulting Search Engine",
    description:
      "Professional network platform for discovering consulting firms, blending digital and human interactions.",
    image: "/placeholder-project.svg",
    technologies: ["Angular", "Node.js", "MongoDB", "Search", "Network"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
  {
    title: "RSquare: Scalable IoT Tracker Platform",
    description:
      "Cloud-based IoT solution for device connectivity and alerts management with MQTT protocol support.",
    image: "/placeholder-project.svg",
    technologies: ["Node.js", "MongoDB", "AWS IoT", "MQTT", "Microservices"],
    github: null,
    demo: null,
    featured: false,
    category: "Architecture",
  },
  {
    title: "SV Microwave Oven Care: Business Site",
    description:
      "Responsive single-page website with accessible design for microwave oven repair services.",
    image: "/placeholder-project.svg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    github: null,
    demo: null,
    featured: false,
    category: "Website Design",
  },
  {
    title: "SVMC CusPro: Custom CRM Software",
    description:
      "Custom CRM with PWA capabilities for microwave oven repair services management.",
    image: "/placeholder-project.svg",
    technologies: ["Angular", "Node.js", "MongoDB", "PWA", "Firebase"],
    github: null,
    demo: null,
    featured: false,
    category: "Full-Stack Development",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary font-medium">
            SELECTED_WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects demonstrating full-stack development capabilities across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-600/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <span className="text-6xl opacity-10 font-mono">{"</>"}</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-mono font-semibold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  {project.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary border border-border text-secondary-foreground text-xs font-mono font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary border border-border rounded-full text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                      Private Project
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
