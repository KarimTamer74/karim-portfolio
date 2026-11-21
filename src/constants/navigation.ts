import type { NavItem } from "@/types";

export const navItems: readonly NavItem[] = [
  { index: "01", label: "Work", href: "#work" },
  { index: "02", label: "Skills", href: "#skills" },
  { index: "03", label: "Experience", href: "#experience" },
  { index: "04", label: "Teaching", href: "#teaching" },
  { index: "05", label: "About", href: "#about" },
  { index: "06", label: "Contact", href: "#contact" },
] as const;
