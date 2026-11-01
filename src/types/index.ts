import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;


export type SystemStatus = "LIVE" | "BUILDING" | "DELIVERED" | "CURRICULUM" | "ARCHIVED";

export type ProjectOrigin =
  | "PERSONAL PRODUCT"
  | "CLIENT ENGAGEMENT"
  | "GRADUATION PROJECT"
  | "NTI CURRICULUM";


export type EvidenceLevel = "FLAGSHIP" | "SELECTED" | "LIMITED";

export type ProjectCategory = "PERSONAL" | "NTI";

export interface Fact {
  label: string;
  value: string;
}

export interface Decision {
  title: string;
  body: string;
  because: string;
}

export type MediaKind = "IMAGE" | "VIDEO";

export interface MediaItem {
  src: string;
  alt: string;
  caption: string;
  kind: MediaKind;
  width: number;
  height: number;
  /** Exactly one image per project must be the hero (isHero: true). */
  isHero: boolean;
  /** Above-the-fold priority for next/image on the homepage entry. */
  priority?: boolean;
}

export interface ExternalLink {
  label: string;
  href: string;
}

/** A project in the registry - flagship, selected, or limited evidence. */
export interface Project {
  slug: string;
  title: string;
  status?: SystemStatus;
  origin: ProjectOrigin;
  category: ProjectCategory;
  /** How much verified evidence exists; controls presentation depth. */
  evidence: EvidenceLevel;
  /** One plain-language sentence shown beneath the title. Optional for
   * projects whose documentation is still pending. */
  mission?: string;
  /** Present-tense activity line — only while status is BUILDING. */
  currentPhase?: string;
  stack: readonly string[];
  facts: readonly Fact[];
  /** Full image list; exactly one entry has isHero: true. That image is the
   * main/hero visual on the card and in the main presentation. All entries
   * (hero + supporting) are shown on the full project page. */
  media: readonly MediaItem[];
  constraints?: readonly Fact[];
  decisions?: readonly Decision[];
  deployment?: {
    facts: readonly Fact[];
    links: readonly ExternalLink[];
  };
  currentState?: {
    stampNote: string;
    details: readonly Fact[];
    lastReviewed: string;
  };
  links: readonly ExternalLink[];
  /** Single truth for presentation: true → Featured, false → MORE PROJECTS. */
  isImportant: boolean;
  /** Presentation order inside either Featured or MORE PROJECTS. */
  priority: number;
}

/** An application inside the NTI teaching curriculum set. */
export interface CurriculumApp {
  slug: string;
  index: string;
  title: string;
}

export interface Job {
  position: string;
  organization: string;
  period: string;
  kind: "INSTRUCTOR" | "FREELANCE" | "TRAINEE";
  summary?: string;
  facts?: readonly Fact[];
  points: readonly string[];
}

export interface Course {
  title: string;
  platform: string;
  duration: string;
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface ContactChannel {
  id: string;
  icon: IconComponent;
  label: string;
  value: string;
  href: string;
}

export interface ContactGroup {
  audience: "RECRUITER" | "CLIENT";
  channels: readonly ContactChannel[];
}

export interface NavItem {
  index: string;
  label: string;
  href: string;
}
