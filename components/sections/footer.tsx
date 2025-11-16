"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-sm text-muted-foreground text-center font-mono">
            (C) {new Date().getFullYear()} Saai Vignesh Premanand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
