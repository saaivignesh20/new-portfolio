"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-20 relative overflow-hidden">
      {/* Animated triangle glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.32, 0.48, 0.32],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.24) 50%, transparent 100%)",
          }}
        />

        {/* Top-right purple glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.32, 0.48, 0.32],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.24) 50%, transparent 100%)",
          }}
        />

        {/* Bottom-center pink glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.32, 0.48, 0.32],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.24) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary text-primary text-sm font-mono font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Transforming{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Visions
              </span>{" "}
              into
              <br />
              Intuitive{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Digital Realities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Full-stack developer with 7 years of experience building modern
              web applications. One line of code at a time 👨‍💻
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground text-base font-medium shadow-[0_4px_0_0_rgba(37,99,235,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_0_0_rgba(37,99,235,0.3)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(37,99,235,0.3)] active:scale-[0.97] transition-all whitespace-nowrap"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-primary/20 bg-background text-foreground text-base font-medium shadow-[0_4px_0_0_rgba(37,99,235,0.15)] hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_6px_0_0_rgba(37,99,235,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(37,99,235,0.15)] active:scale-[0.97] transition-all whitespace-nowrap"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/saaivignesh20"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saaivigneshp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:saaivigneshpremanand@gmail.com"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px]">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-blue-600/20 blur-3xl"
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/profile-photo.jpg" loading="lazy"
                  alt="Saai Vignesh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
