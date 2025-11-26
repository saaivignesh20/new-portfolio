"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/lib/data/skills"

// Map gradient colors to actual values for inline styles
const gradientMap: Record<string, string> = {
  "from-blue-500 to-cyan-500": "linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))",
  "from-green-500 to-emerald-500": "linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))",
  "from-purple-500 to-pink-500": "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
  "from-orange-500 to-red-500": "linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))",
  "from-yellow-500 to-amber-500": "linear-gradient(to right, rgb(234, 179, 8), rgb(245, 158, 11))",
}

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
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="mb-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-white text-xs font-mono font-semibold mb-3"
                    style={{ background: gradientMap[category.gradientColor] }}
                  >
                    {category.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full border ${category.bgColor} ${category.borderColor} ${category.textColor} ${category.hoverBg} text-sm font-mono font-medium transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
