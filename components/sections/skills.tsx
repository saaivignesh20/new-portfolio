"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Angular", level: 90 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    category: "Cloud & Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Auth0", level: 75 },
      { name: "Figma", level: 75 },
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    category: "AI & Python",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Python", level: 85 },
      { name: "ChatGPT API", level: 80 },
      { name: "Groq API", level: 75 },
      { name: "Streamlit", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Analysis", level: 75 },
    ],
  },
  {
    category: "Architecture",
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "System Design", level: 85 },
      { name: "Microservices", level: 80 },
      { name: "IoT Solutions", level: 75 },
      { name: "Scalable APIs", level: 90 },
      { name: "Database Design", level: 85 },
      { name: "Cloud Architecture", level: 80 },
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
                  className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-mono font-semibold mb-3`}
                >
                  {category.category.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
