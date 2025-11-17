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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-background/95 backdrop-blur-xl border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <motion.button
            onClick={() => {
              if ((window as any).scrollToPosition) {
                (window as any).scrollToPosition({ top: 0, behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 flex items-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <img src={logoSrc} alt="Saai Vignesh" className="h-10 w-auto" />
          </motion.button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target && (window as any).scrollToPosition) {
                    const targetPosition = (target as HTMLElement).offsetTop - 80; // Account for nav height
                    (window as any).scrollToPosition({ top: targetPosition, behavior: 'smooth' });
                  }
                }}
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
            className="hidden lg:flex items-center gap-2 absolute right-0"
          >
            <a
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1Hwc0A5JtxypQAJstry_m1cVRee3_dZCZnk2UExFdONU/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_4px_0_0_rgba(37,99,235,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_0_0_rgba(37,99,235,0.3)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(37,99,235,0.3)] active:scale-[0.97] transition-all"
            >
              View Resume
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={cycleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted hover:bg-muted/90 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.1)] active:scale-[0.97] transition-all"
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const target = document.querySelector(item.href);
                  if (target && (window as any).scrollToPosition) {
                    const targetPosition = (target as HTMLElement).offsetTop - 80; // Account for nav height
                    (window as any).scrollToPosition({ top: targetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <a
                href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1Hwc0A5JtxypQAJstry_m1cVRee3_dZCZnk2UExFdONU/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 flex-1 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_4px_0_0_rgba(37,99,235,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_0_0_rgba(37,99,235,0.3)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(37,99,235,0.3)] active:scale-[0.97] transition-all"
              >
                View Resume
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={cycleTheme}
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted hover:bg-muted/90 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.1)] active:scale-[0.97] transition-all"
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
