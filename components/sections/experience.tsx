"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "CNS - Indiana University",
    period: "Mar 2025 - Present",
    location: "Bloomington, IN",
    logo: "IU",
    description:
      "Working on NIH Human Reference Atlas project using Angular 19, SonarQube, TypeScript, Node.js, Zod, Storybook, and Figma to build production-grade tools for biomedical research.",
    technologies: [
      "Angular 19",
      "TypeScript",
      "Node.js",
      "SonarQube",
      "Jest",
      "Storybook",
      "Figma",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "StellarLogix",
    period: "Jan 2024 - Jul 2024",
    location: "Chennai, India",
    logo: "SL",
    description:
      "Developed IoT solutions and cloud infrastructure using React, NestJS, Node.js, Serverless, PostgreSQL, AWS IoT Core, DynamoDB, MQTT, and CoAP protocols.",
    technologies: [
      "React",
      "NestJS",
      "PostgreSQL",
      "AWS IoT",
      "DynamoDB",
      "MQTT",
      "Serverless",
    ],
  },
  {
    title: "Associate Software Developer",
    company: "Calibraint",
    period: "Oct 2021 - May 2023",
    location: "Chennai, India",
    logo: "CB",
    description:
      "Built enterprise applications using Angular 14, NestJS, TypeScript, MongoDB, Mongoose, JWT, AWS S3, CodePipeline, and EC2. Developed ConSource procurement platform and consulting review system.",
    technologies: [
      "Angular 14",
      "NestJS",
      "MongoDB",
      "AWS S3",
      "CodePipeline",
      "DocuSign",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary font-medium">
            CAREER_PATH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions across various industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={
                    index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                  }
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mb-4">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-mono font-bold text-sm">
                            {exp.logo}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-primary font-medium">
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-1">
                            {exp.title}
                          </h3>
                          <div className="text-muted-foreground font-medium text-sm">
                            {exp.company} · {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full items-center justify-center border-4 border-background shadow-lg ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
