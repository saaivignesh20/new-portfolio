"use client"

import { motion } from "framer-motion"
import { Code2, Database, Cloud, Palette } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Expert in React, Angular, HTML5, CSS3, and modern JavaScript frameworks",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Building scalable APIs with Node.js, Express, NestJS, MongoDB, and PostgreSQL",
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    description: "Deploying applications on AWS, Firebase, and using modern tools like Auth0 and Figma",
  },
  {
    icon: Palette,
    title: "Full-Stack Development",
    description: "End-to-end application development from concept to deployment",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary font-medium">
            ABOUT_ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Hello 👋 I&apos;m Saai Vignesh
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Full-stack developer with 7 years of experience crafting digital products
            for businesses and consumers. Previously at a blockchain startup, now pursuing
            a Master&apos;s in Computer Science at Indiana University Bloomington.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-card border border-border rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm font-mono text-muted-foreground">
                YEARS_EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm font-mono text-muted-foreground">
                PROJECTS_DELIVERED
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1.5+</div>
              <div className="text-sm font-mono text-muted-foreground">
                YEARS_BLOCKCHAIN_STARTUP
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
