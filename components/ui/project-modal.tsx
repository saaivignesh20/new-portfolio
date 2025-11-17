"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useEffect } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useTheme } from "next-themes";
import "overlayscrollbars/overlayscrollbars.css";

interface Project {
  title: string;
  description: string;
  fullDescription?: string[];
  image: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  category: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 dark:bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border shadow-2xl pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border hover:bg-secondary hover:border-primary transition-all shadow-sm"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header - Non-scrollable */}
              <div className="p-4 md:p-6 border-b border-border pr-14 md:pr-16">
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon/Logo */}
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 border border-border shadow-sm">
                    <span className="text-2xl md:text-3xl font-mono font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Title and Category */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight pr-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 items-start">
                      {project.category && (
                        <span className="inline-flex items-center w-fit max-w-full px-3 py-1 bg-secondary border border-border text-secondary-foreground text-xs font-mono font-medium rounded-full">
                          {project.category}
                        </span>
                      )}
                      {project.featured && (
                        <span className="inline-flex items-center w-fit max-w-full px-3 py-1 bg-primary text-white text-xs font-mono font-semibold rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Desktop Only */}
                {project.demo && (
                  <div className="hidden md:flex flex-wrap gap-3 mt-6">
                    <Button className="flex-1 sm:flex-none" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Desktop: Two-column layout */}
              <div className="hidden md:block p-6">
                <div className="grid md:grid-cols-[450px,1fr] gap-6 h-[calc(90vh-280px)]">
                  {/* Left Column - Screenshot and Technologies (Fixed) */}
                  <div className="space-y-6">
                    {/* Screenshot */}
                    <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-muted">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-mono text-primary font-medium mb-3 uppercase">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-secondary border border-border rounded-full text-xs font-mono font-medium hover:bg-secondary/80 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Source Button */}
                    {project.github && (
                      <div>
                        <Button className="w-full" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Description (Scrollable) */}
                  <OverlayScrollbarsComponent
                    options={{
                      scrollbars: {
                        autoHide: "leave",
                        autoHideDelay: 800,
                        // Dark mode uses light scrollbars, light mode uses dark scrollbars
                        theme: currentTheme === "dark" ? "os-theme-light" : "os-theme-dark",
                      },
                    }}
                    defer
                  >
                    <div className="pr-4">
                      <h3 className="text-sm font-mono text-primary font-medium mb-4 uppercase">
                        About
                      </h3>
                      {project.fullDescription ? (
                        <div className="space-y-4">
                          {project.fullDescription.map((paragraph, index) => (
                            <p key={index} className="text-base text-muted-foreground leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </OverlayScrollbarsComponent>
                </div>
              </div>

              {/* Mobile/Tablet: Single scrollable column */}
              <div className="md:hidden flex flex-col h-[calc(90vh-160px)]">
                <OverlayScrollbarsComponent
                  options={{
                    scrollbars: {
                      autoHide: "leave",
                      autoHideDelay: 800,
                      theme: currentTheme === "dark" ? "os-theme-light" : "os-theme-dark",
                    },
                  }}
                  defer
                  className="flex-1"
                >
                  <div className="p-4 space-y-6 pb-20">
                    {/* Screenshot */}
                    <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-muted">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-mono text-primary font-medium mb-3 uppercase">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-secondary border border-border rounded-full text-xs font-mono font-medium hover:bg-secondary/80 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-mono text-primary font-medium mb-4 uppercase">
                        About
                      </h3>
                      {project.fullDescription ? (
                        <div className="space-y-4">
                          {project.fullDescription.map((paragraph, index) => (
                            <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </OverlayScrollbarsComponent>

                {/* Fixed Bottom Action Buttons - Mobile Only */}
                <div className="border-t border-border bg-background p-4">
                  <div className="flex gap-3">
                    {project.demo && (
                      <Button className="flex-1" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button className="flex-1" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
