"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/lib/data/skills"

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
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
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
                    className={`px-4 py-2 rounded-full border ${category.bgColor} ${category.borderColor} ${category.textColor} ${category.hoverBg} text-sm font-mono font-medium transition-all duration-200 hover:scale-105`}
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
