import Image from "next/image";
import Link from "next/link";
import { featuredProjects, getProjectHero, moreProjects, ntiProjects, projectCounts } from "@/data/registry";
import type { Project } from "@/types";
import { StatusStamp } from "@/components/shared/status-stamp";
import { Reveal } from "@/components/shared/reveal";
import { MoreProjects, ORIGIN_LABELS } from "@/components/sections/more-projects";


export function WorkSection({ className }: { className?: string }): React.ReactElement {
  const featured = featuredProjects.filter((p) => p.status !== "CURRICULUM");
  const secondary = moreProjects.filter((p) => p.category === "PERSONAL");

  return (
    <section id="work" aria-label="Work" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
            01 · SELECTED WORK
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            Apps I <span className="text-gradient">shipped</span>
          </h2>
          <p className="mt-3 max-w-[52ch] text-secondary">
            The main apps I have built, in plain words.
          </p>
        </Reveal>

        <div className="mt-14 space-y-20">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={0.05}>
              <ProjectShowcase project={project} index={i} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <MoreProjects
            projects={secondary}
            ntiProjects={ntiProjects}
            totalCount={projectCounts.total}
          />
        </Reveal>
      </div>
    </section>
  );
}

function ProjectShowcase({
  project,
  index,
  flip,
}: {
  project: Project;
  index: number;
  flip: boolean;
}): React.ReactElement {
  const hero = getProjectHero(project);

  return (
    <article className="group/card grid items-center gap-8 lg:grid-cols-12">
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.title} - open project details`}
        className={`block overflow-hidden rounded-2xl border border-border-default lg:col-span-7 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes="(min-width: 1024px) 560px, 90vw"
          className="aspect-[3/2] w-full object-cover object-top transition-transform duration-300 ease-out group-hover/card:scale-[1.02]"
        />
      </Link>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="text-gradient font-mono text-sm font-bold tracking-[0.22em]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <StatusStamp status={project.status} />
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
            {ORIGIN_LABELS[project.origin] ?? project.origin}
          </p>
        </div>

        <h3
          id={`work-${project.slug}`}
          className="mt-3 font-sans text-2xl font-bold tracking-tight text-primary"
        >
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors duration-150 hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-[15px] leading-relaxed text-secondary">{project.mission}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3">
          {project.facts.slice(0, 3).map((fact) => (
            <div key={fact.label} className="rounded-xl border border-border-default bg-surface px-3 py-2.5">
              <dt className="font-mono text-[9px] font-bold tracking-[0.14em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 font-mono text-[11px] font-semibold text-primary">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-default px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            View details
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
