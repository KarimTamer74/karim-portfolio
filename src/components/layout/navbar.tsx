"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navItems } from "@/constants/navigation";
import { siteConfig } from "@/lib/site-config";

export function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string>("");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scrollspy: highlight the nav item of the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/#top" className="font-sans text-lg font-bold tracking-tight text-primary">
          Karim<span className="text-gradient">.Abo Kamel</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={`/${item.href}`}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {resolvedTheme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
          )}
          <a
            href={siteConfig.resumeUrl}
            className="btn-gradient hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-block"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface text-primary transition-colors hover:border-accent md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-bg/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? "bg-surface text-accent" : "text-primary hover:bg-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={siteConfig.resumeUrl}
              className="btn-gradient mt-2 rounded-full px-4 py-3 text-center text-sm font-semibold"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
