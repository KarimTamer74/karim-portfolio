"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navItems } from "@/constants/navigation";
import { siteConfig } from "@/lib/site-config";

export function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-sans text-lg font-bold tracking-tight text-primary">
          Karim<span className="text-gradient">.Tamer</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default bg-surface text-primary transition-colors hover:border-accent"
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={siteConfig.resumeUrl}
            className="btn-gradient hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-block"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default bg-surface text-primary md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-sans text-lg font-bold tracking-tight text-primary">
              Karim<span className="text-gradient">.Tamer</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default bg-surface text-primary"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-3xl font-bold text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              className="btn-gradient mt-4 rounded-full px-6 py-3 text-base font-semibold"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
