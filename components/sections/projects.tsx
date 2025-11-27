"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectModal } from "@/components/ui/project-modal";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
            A showcase of projects demonstrating full-stack development
            capabilities across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Card className="h-full flex flex-col group overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.github && (
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary hover:text-primary transition-all shadow-sm text-white"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4 md:max-w-[45%]">
                      <span className="inline-flex items-center px-3 py-1 bg-primary text-white text-xs font-mono font-semibold rounded-full whitespace-nowrap md:whitespace-normal">
                        FEATURED
                      </span>
                    </div>
                  )}
                  {project.category && (
                    <div className="absolute top-4 left-4 md:max-w-[45%]">
                      <span className="inline-flex items-center px-3 py-1 bg-secondary border border-border text-secondary-foreground text-xs font-mono font-medium rounded-full whitespace-nowrap">
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

                {project.demo && (
                  <CardFooter>
                    <Button
                      size="sm"
                      className="w-full"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
