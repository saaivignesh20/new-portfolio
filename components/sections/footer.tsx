"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-mono">&copy; {new Date().getFullYear()}</span>{" "}
            Built with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> using
            Next.js & TailwindCSS
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
