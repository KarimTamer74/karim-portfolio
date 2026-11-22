import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allProjects, getProjectBySlug, getProjectHero, getProjectSlugs } from "@/data/registry";
import { siteConfig } from "@/lib/site-config";
import { StatusStamp } from "@/components/shared/status-stamp";
import { FactRow } from "@/components/shared/fact-row";
import { MediaFigure } from "@/components/shared/media-figure";
import { MediaCarousel } from "@/components/case-study/media-carousel";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const status = project.status ? ` · ${project.status}` : "";
  return {
    title: `${project.title}${status}`,
    description: project.mission ?? `${project.title} - ${project.origin.toLowerCase()}.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title}${status}`,
      description: project.mission ?? project.origin,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
    twitter: {
      title: `${project.title}${status}`,
      description: project.mission ?? project.origin,
    },
  };
}

function BackToWork({ className = "" }: { className?: string }): React.ReactElement {
  return (
    <Link href="/#work" className={`btn btn-outline ${className}`.trim()}>
      ← BACK TO WORK
    </Link>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = allProjects.findIndex((p) => p.slug === slug);
  const prev = allProjects[(index - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(index + 1) % allProjects.length];
  const heroMedia = getProjectHero(project);
  const supportingMedia = project.media.filter((media) => !media.isHero);

  return (
    <main id="main-content" className="page-enter flex-1">
      <article className="mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:pt-24 lg:px-10">
        <BackToWork />

        {/* Split hero */}
        <header className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <StatusStamp status={project.status} />
              <p className="label">{project.origin}</p>
            </div>
            <h1 className="mt-6 text-h1 text-primary" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              {project.title}
            </h1>
            {project.mission ? (
              <p className="mt-6 max-w-[52ch] text-body-lg text-secondary">{project.mission}</p>
            ) : (
              <p className="mt-6 max-w-[52ch] text-body-lg text-secondary">
                Documentation for this project is still being prepared. The
                verified information available today is listed below.
              </p>
            )}
            {project.links.length > 0 || supportingMedia.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-gradient">
                      {link.label}
                    </a>
                  </li>
                ))}
                {supportingMedia.length > 0 ? (
                  <li>
                    <a href="#screens" className="btn btn-outline">
                      SCREENS ↓
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
          {heroMedia ? (
            <div className={heroMedia.width * 1.2 > heroMedia.height ? "" : "mx-auto max-w-[340px]"}>
              <MediaFigure
                media={{ ...heroMedia, priority: true }}
                sizes="(min-width: 1024px) 36rem, (min-width: 640px) 80vw, 100vw"
              />
            </div>
          ) : null}
        </header>

        {/* Fact cards */}
        {project.facts.length > 0 ? (
          <section aria-label="Facts" className="mt-16">
            <h2 className="label-accent">At a glance</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.facts.map((fact) => (
                <li
                  key={fact.label}
                  className="rounded-[var(--radius-media)] p-6"
                  style={{ background: "linear-gradient(160deg, var(--color-glow-1), transparent 60%), var(--color-surface)" }}
                >
                  <p className="font-sans text-lg font-bold text-primary">{fact.value}</p>
                  <p className="label mt-3 text-muted">{fact.label}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Technology tags */}
        {project.stack.length > 0 ? (
          <section aria-label="Technology" className="mt-16 border-t border-border-subtle pt-10">
            <h2 className="label-accent">Built with</h2>
            <ul className="mt-7 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="mono-data flex items-center gap-2.5 rounded-full border border-border-subtle px-5 py-2"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-muted)" }} />
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Details: minimal rows */}
        {project.constraints?.length || project.decisions?.length || project.currentState ? (
          <section aria-label="Project details" className="mt-16 border-t border-border-subtle pt-10">
            <h2 className="label-accent">Project details</h2>
            {project.constraints?.length ? (
              <div className="mt-10">
                <FactRow facts={project.constraints} className="gap-x-10 gap-y-5" />
              </div>
            ) : null}
            {project.decisions?.length ? (
              <div className="mt-14 divide-y divide-border-subtle border-y border-border-subtle">
                {project.decisions.map((decision) => (
                  <div key={decision.title} className="py-8">
                    <h3 className="text-h3 text-primary">{decision.title}</h3>
                    <p className="mt-3 max-w-[62ch] text-body-lg text-secondary">{decision.body}</p>
                    <p className="mt-4 max-w-[62ch]">
                      <span className="label">Why: </span>
                      <span className="text-secondary">{decision.because}</span>
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
            {project.currentState ? (
              <div className="mt-14">
                <h3 className="label">Where it stands</h3>
                <p className="mt-5 flex flex-wrap items-center gap-4">
                  <StatusStamp status={project.status} />
                  <span className="max-w-[48ch] text-secondary">{project.currentState.stampNote}</span>
                </p>
                <FactRow facts={project.currentState.details} className="mt-6 gap-x-10 gap-y-5" />
                <p className="mono-note mt-6">DETAILS LAST CHECKED {project.currentState.lastReviewed}</p>
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Media carousel */}
        {supportingMedia.length > 0 ? (
          <section id="screens" aria-label="Media" className="mt-16 scroll-mt-24 border-t border-border-subtle pt-10">
            <h2 className="label-accent">Screens</h2>
            <div className="mt-10">
              <MediaCarousel media={supportingMedia} />
            </div>
          </section>
        ) : null}

        {/* Prev / next */}
        <nav aria-label="Project navigation" className="mt-16 border-t border-border-subtle pt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Link href={`/work/${prev.slug}`} aria-label={`Previous project: ${prev.title}`} className="group/p block transition-opacity hover:opacity-90">
              <p className="label">← Previous</p>
              <p className="mt-3 inline-flex items-center gap-2 text-h3 text-primary transition-colors group-hover/p:text-accent">
                {prev.title}
              </p>
            </Link>
            <Link href={`/work/${next.slug}`} aria-label={`Next project: ${next.title}`} className="group/n block text-right transition-opacity hover:opacity-90 sm:text-right">
              <p className="label">Next →</p>
              <p className="mt-3 inline-flex items-center gap-2 text-h3 text-primary transition-colors group-hover/n:text-accent">
                {next.title}
              </p>
            </Link>
          </div>
        </nav>
      </article>
    </main>
  );
}
