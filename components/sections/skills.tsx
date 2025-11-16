"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Frontend",
    gradientColor: "from-blue-500 to-cyan-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    hoverBg: "hover:bg-blue-500/20",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Angular",
      "React",
      "TypeScript",
    ],
  },
  {
    category: "Backend",
    gradientColor: "from-green-500 to-emerald-500",
    textColor: "text-green-500",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    hoverBg: "hover:bg-green-500/20",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    category: "Cloud & Tools",
    gradientColor: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    hoverBg: "hover:bg-purple-500/20",
    skills: [
      "AWS",
      "Firebase",
      "Auth0",
      "Figma",
      "Git",
      "Docker",
    ],
  },
  {
    category: "AI & Python",
    gradientColor: "from-orange-500 to-red-500",
    textColor: "text-orange-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    hoverBg: "hover:bg-orange-500/20",
    skills: [
      "Python",
      "ChatGPT API",
      "Groq API",
      "Streamlit",
      "Machine Learning",
      "Data Analysis",
    ],
  },
  {
    category: "Architecture",
    gradientColor: "from-yellow-500 to-amber-500",
    textColor: "text-yellow-500",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
    hoverBg: "hover:bg-yellow-500/20",
    skills: [
      "System Design",
      "Microservices",
      "IoT Solutions",
      "Scalable APIs",
      "Database Design",
      "Cloud Architecture",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary font-medium">
            TECH_STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.gradientColor} text-white text-xs font-mono font-semibold mb-3`}
                >
                  {category.category.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-4 py-2 rounded-full border ${category.bgColor} ${category.borderColor} ${category.textColor} ${category.hoverBg} text-sm font-mono font-medium transition-all hover:scale-105`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
