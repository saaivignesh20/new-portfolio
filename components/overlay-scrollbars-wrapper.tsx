"use client";

import { useEffect, useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useTheme } from "next-themes";
import type { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

interface OverlayScrollbarsWrapperProps {
  children: React.ReactNode;
}

export function OverlayScrollbarsWrapper({ children }: OverlayScrollbarsWrapperProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInitialized = (instance: OverlayScrollbars) => {
    // When OverlayScrollbars initializes, attach scroll listener
    const { viewport } = instance.elements();

    const handleScroll = () => {
      const scrollEvent = new CustomEvent("osScroll", {
        detail: { scrollTop: viewport.scrollTop },
      });
      window.dispatchEvent(scrollEvent);
    };

    viewport.addEventListener("scroll", handleScroll);

    // Expose scroll function globally for navigation
    (window as any).scrollToPosition = (position: number | { top: number; behavior?: ScrollBehavior }) => {
      if (typeof position === 'number') {
        viewport.scrollTo({ top: position, behavior: 'smooth' });
      } else {
        viewport.scrollTo(position);
      }
    };

    // Store cleanup function
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      delete (window as any).scrollToPosition;
    };
  };

  if (!mounted) {
    return <div className="h-screen">{children}</div>;
  }

  return (
    <OverlayScrollbarsComponent
      element="div"
      options={{
        scrollbars: {
          autoHide: "leave",
          autoHideDelay: 1000,
          // Dark mode uses light scrollbars, light mode uses dark scrollbars
          theme: currentTheme === "dark" ? "os-theme-light" : "os-theme-dark",
        },
        overflow: {
          x: "hidden",
          y: "scroll",
        },
      }}
      events={{
        initialized: handleInitialized,
      }}
      defer
      className="h-screen"
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
