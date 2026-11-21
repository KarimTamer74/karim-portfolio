import Image from "next/image";
import Link from "next/link";
import { featuredProjects, getProjectHero, moreProjects, projectCounts } from "@/data/registry";
import type { Project } from "@/types";
import { StatusStamp } from "@/components/shared/status-stamp";


export function WorkSection({ className }: { className?: string }): React.ReactElement {
  const featured = featuredProjects.filter((p) => p.status !== "CURRICULUM");
  const secondary = moreProjects.filter((p) => p.category === "PERSONAL");

  return (
    <section id="work" aria-label="Work" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
              01 · SELECTED WORK
            </p>
            <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
              Apps I{" "}
              <span className="text-gradient">shipped</span>
            </h2>
            <p className="mt-3 max-w-[52ch] text-secondary">
              Featured systems I have built, shipped, or currently operate.
            </p>
          </div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
            {featured.length} FEATURED · {projectCounts.total} IN THE FULL ARCHIVE
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h3 className="font-mono text-[12px] font-bold tracking-[0.22em] text-muted">
              MORE PROJECTS
            </h3>
            <Link
              href="/projects"
              className="group/archive inline-flex items-center gap-2 font-mono text-[12px] font-bold tracking-[0.18em] text-accent transition-opacity hover:opacity-80"
            >
              VIEW ALL PROJECTS
              <span
                aria-hidden
                className="transition-transform duration-150 ease-out group-hover/archive:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          <ul className="mt-4 divide-y divide-border-subtle border-t border-border-subtle">
            {secondary.map((project) => (
              <MoreRow
                key={project.slug}
                href={`/work/${project.slug}`}
                title={project.title}
                line={project.mission ? project.mission : project.origin}
                meta={project.origin}
              />
            ))}
            <MoreRow
              href="/projects#curriculum"
              title="NTI Projects"
              line="Apps built while teaching the NTI Flutter curriculum."
              meta="CURRICULUM"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }): React.ReactElement {
  const hero = getProjectHero(project);

  return (
    <article
      aria-labelledby={`work-${project.slug}`}
      className="group/card overflow-hidden rounded-2xl border border-border-default bg-surface transition-colors duration-200 hover:border-accent"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block overflow-hidden"
        aria-label={`${project.title} case study`}
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes="(min-width: 768px) 480px, 90vw"
          className="aspect-[3/2] w-full object-cover object-top transition-transform duration-300 ease-out group-hover/card:scale-[1.02]"
        />
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <StatusStamp status={project.status} />
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
            {project.origin}
          </p>
        </div>

        <h3
          id={`work-${project.slug}`}
          className="mt-3 font-sans text-xl font-bold tracking-tight text-primary transition-colors duration-150 group-hover/card:text-accent"
        >
          {project.title}
        </h3>

        <p className="mt-2 text-[15px] leading-relaxed text-secondary">{project.mission}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-default px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Case study
            <span
              aria-hidden
              className="transition-transform duration-150 ease-out group-hover/link:translate-x-0.5"
            >
              →
            </span>
          </Link>

          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-default bg-bg px-5 py-2.5 text-[13px] font-bold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {link.label.replace(" ↗", "")}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function MoreRow({
  href,
  title,
  line,
  meta,
}: {
  href: string;
  title: string;
  line: string;
  meta: string;
}): React.ReactElement {
  return (
    <li>
      <Link
        href={href}
        className="group/row flex min-h-14 flex-wrap items-baseline gap-x-6 gap-y-1 py-4 transition-colors duration-150"
      >
        <span className="font-sans font-semibold text-primary transition-colors duration-150 group-hover/row:text-accent">
          {title}
        </span>
        <span className="min-w-0 flex-1 truncate text-sm text-secondary">{line}</span>
        <span className="hidden font-mono text-[11px] font-semibold tracking-[0.18em] text-muted sm:block">
          {meta}
        </span>
        <span aria-hidden className="text-muted transition-colors group-hover/row:text-accent">
          →
        </span>
      </Link>
    </li>
  );
}
