"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { StatusStamp } from "@/components/shared/status-stamp";

export const ORIGIN_LABELS: Record<string, string> = {
  "PERSONAL PRODUCT": "MY OWN APP",
  "GRADUATION PROJECT": "GRADUATION PROJECT",
  "NTI CURRICULUM": "NTI TRAINING",
  "CLIENT ENGAGEMENT": "MY OWN APP",
};

interface MoreProjectsProps {
  projects: readonly Project[];
  ntiProjects: readonly Project[];
  totalCount: number;
}

export function MoreProjects({
  projects,
  ntiProjects,
  totalCount,
}: MoreProjectsProps): React.ReactElement {
  return (
    <div className="mt-20 space-y-12">
      <ScrollRow
        title="MORE PROJECTS"
        projects={projects}
        headerLink={{ href: "/projects", label: `VIEW ALL ${totalCount} PROJECTS` }}
      />
      <ScrollRow
        title="WITH MY NTI STUDENTS"
        projects={ntiProjects}
        headerLink={{ href: "/projects#curriculum", label: "VIEW ALL" }}
      />
    </div>
  );
}

function ScrollRow({
  title,
  projects,
  headerLink,
}: {
  title: string;
  projects: readonly Project[];
  headerLink?: { href: string; label: string };
}): React.ReactElement {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1): void => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <h3 className="font-sans text-xl font-extrabold tracking-tight text-primary">
          <span className="text-gradient">{title.charAt(0)}</span>{title.slice(1)}
        </h3>
        {headerLink ? (
          <Link
            href={headerLink.href}
            className="group/archive inline-flex items-center gap-2 font-mono text-[12px] font-bold tracking-[0.18em] text-accent transition-opacity hover:opacity-80"
          >
            {headerLink.label}
            <span
              aria-hidden
              className="transition-transform duration-150 ease-out group-hover/archive:translate-x-0.5"
            >
              →
            </span>
          </Link>
        ) : null}
      </div>

      <div className="relative mt-5">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`${title} - scroll left`}
          className="absolute -left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-default bg-bg/90 text-primary shadow-lg backdrop-blur transition-all duration-150 hover:border-accent hover:bg-accent hover:text-white active:scale-95"
        >
          <svg aria-hidden viewBox="0 0 16 16" fill="none" className="h-4 w-4">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`${title} - scroll right`}
          className="absolute -right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-default bg-bg/90 text-primary shadow-lg backdrop-blur transition-all duration-150 hover:border-accent hover:bg-accent hover:text-white active:scale-95"
        >
          <svg aria-hidden viewBox="0 0 16 16" fill="none" className="h-4 w-4">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scroller}
          className="-mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
        >
          <div className="flex snap-x snap-mandatory gap-4">
            {projects.map((project) => (
              <MiniCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ project }: { project: Project }): React.ReactElement {
  const shot = project.media[0];
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} - open project details`}
      className="group/mini flex min-w-[240px] max-w-[240px] snap-start flex-col rounded-2xl border border-border-default bg-surface p-4 transition-colors hover:border-accent"
    >
      {shot ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className="aspect-[3/2] w-full rounded-xl border border-border-default object-cover object-top"
        />
      ) : null}
      <div className="mt-3 flex flex-1 flex-col">
        <StatusStamp status={project.status} />
        <p className="mt-2 font-sans font-semibold text-primary transition-colors group-hover/mini:text-accent">
          {project.title}
        </p>
        <p className="mt-1 line-clamp-2 text-sm text-secondary">
          {project.mission ? project.mission : ORIGIN_LABELS[project.origin] ?? project.origin}
        </p>
        <div className="mt-3 flex justify-end">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-default text-muted transition-all duration-150 group-hover/mini:translate-x-0.5 group-hover/mini:border-accent group-hover/mini:bg-accent group-hover/mini:text-white"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
