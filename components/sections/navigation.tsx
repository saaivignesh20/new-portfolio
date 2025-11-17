"use client";

import { motion } from "framer-motion";
import { ExternalLink, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      console.log("Scroll event:", e);
      if (e instanceof CustomEvent) {
        // Handle custom osScroll event from OverlayScrollbarsWrapper
        setIsScrolled(e.detail.scrollTop > 20);
      } else {
        // Fallback to window scroll
        setIsScrolled(window.scrollY > 20);
      }
    };

    // Listen to custom osScroll event
    window.addEventListener("osScroll", handleScroll as EventListener);
    // Also listen to regular scroll as fallback
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("osScroll", handleScroll as EventListener);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "dark";
  const logoSrc = currentTheme === "dark" ? "/logo-light.png" : "/logo.png";

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const renderThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />;

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "system":
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <motion.a
            href="#"
            className="absolute left-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logoSrc} alt="Saai Vignesh" className="h-10 w-auto" />
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-mono font-medium text-foreground/70 hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="hidden md:flex items-center gap-2 absolute right-0"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
            >
              View Resume
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={cycleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {renderThemeIcon()}
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute right-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-mono font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 flex-1 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
              >
                View Resume
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={cycleTheme}
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Toggle theme"
              >
                {renderThemeIcon()}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
