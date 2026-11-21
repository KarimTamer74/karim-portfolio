import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  allProjects,
  getProjectBySlug,
  getProjectHero,
  getProjectSlugs,
  projectCategoryLabels,
} from "@/data/registry";
import { siteConfig } from "@/lib/site-config";
import { StatusStamp } from "@/components/shared/status-stamp";
import { FactRow } from "@/components/shared/fact-row";
import { MediaFigure } from "@/components/shared/media-figure";
import { MiniRail, type RailPart } from "@/components/case-study/mini-rail";

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
    description:
      project.mission ??
      `${project.title} - ${projectCategoryLabels[project.category].toLowerCase()}.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title}${status}`,
      description: project.mission ?? projectCategoryLabels[project.category],
      url: `${siteConfig.url}/work/${project.slug}`,
    },
    twitter: {
      title: `${project.title}${status}`,
      description: project.mission ?? projectCategoryLabels[project.category],
    },
  };
}

const SECTION_CLASSES =
  "scroll-mt-28 border-t border-border-subtle pt-10 mt-16";

function BackToWork({ className = "" }: { className?: string }): React.ReactElement {
  return (
    <Link
      href="/#work"
      className={`btn btn-outline ${className}`.trim()}
    >
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
  const caseStudy = project.caseStudy;

  const parts: RailPart[] = [
    ...(caseStudy
      ? [
          { id: "overview", label: "OVERVIEW" },
          { id: "problem", label: "THE PROBLEM" },
          { id: "solution", label: "THE SOLUTION" },
          { id: "ownership", label: "MY ROLE" },
          { id: "features", label: "FEATURES" },
          { id: "architecture", label: "ARCHITECTURE" },
          { id: "testing-release", label: "TESTING & RELEASE" },
        ]
      : [
          { id: "overview", label: "OVERVIEW" },
          ...(project.facts.length ? [{ id: "facts", label: "FACTS" as const }] : []),
          ...(project.stack.length
            ? [{ id: "technology", label: "TECHNOLOGY" as const }]
            : []),
          ...(project.constraints?.length ||
          project.decisions?.length ||
          project.currentState
            ? [{ id: "details", label: "DETAILS" as const }]
            : []),
        ]),
    ...(supportingMedia.length
      ? [{ id: "media", label: "MEDIA" as const }]
      : []),
    ...(project.links.length ? [{ id: "source", label: "SOURCE" as const }] : []),
  ];

  return (
    <main id="main-content" className="page-enter flex-1">
      <article className="mx-auto max-w-[1200px] px-6 pb-24 pt-28 md:pt-32 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Rail */}
          <div className="lg:col-span-2">
            <MiniRail parts={parts} />
          </div>

          {/* Body */}
          <div className="lg:col-span-10 xl:col-span-9">
            <header>
              <BackToWork />
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <StatusStamp status={project.status} />
                <p className="label">
                  {projectCategoryLabels[project.category]}
                </p>
              </div>
              <h1 className="mt-4 text-h1 text-primary">{project.title}</h1>
            </header>

            {/* Overview */}
            <section id="overview" aria-label="Overview" className="mt-8">
              {caseStudy ? (
                <>
                  <h2 className="label-accent">Project Overview</h2>
                  {project.mission ? (
                    <p className="mt-4 max-w-[62ch] text-body-lg text-secondary">
                      {project.mission}
                    </p>
                  ) : null}
                </>
              ) : project.mission ? (
                <p className="max-w-[62ch] text-body-lg text-secondary">
                  {project.mission}
                </p>
              ) : (
                <p className="max-w-[62ch] text-body-lg text-secondary">
                  Documentation for this project is still being prepared. The
                  verified information available today is listed below.
                </p>
              )}
            </section>

            {/* Hero media */}
            {heroMedia ? (
              <div
                className={
                  heroMedia.width > heroMedia.height
                    ? "mt-12 max-w-[880px]"
                    : "mt-12 max-w-[380px]"
                }
              >
                <MediaFigure
                  media={{ ...heroMedia, priority: true }}
                  sizes="(min-width: 1024px) 50rem, (min-width: 640px) 70vw, 90vw"
                />
              </div>
            ) : null}

            {caseStudy ? (
              <>
                <section
                  id="problem"
                  aria-label="The Problem"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">The Problem</h2>
                  <p className="mt-5 max-w-[62ch] text-secondary">
                    {caseStudy.problem}
                  </p>
                </section>

                <section
                  id="solution"
                  aria-label="The Solution"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">The Solution</h2>
                  <p className="mt-5 max-w-[62ch] text-secondary">
                    {caseStudy.solution}
                  </p>
                </section>

                <section
                  id="ownership"
                  aria-label="My Role and Ownership"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">My Role &amp; Ownership</h2>
                  <p className="mt-5 max-w-[62ch] text-secondary">
                    {caseStudy.role}
                  </p>
                </section>

                <section
                  id="features"
                  aria-label="Key Features"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">Key Features</h2>
                  <ul className="mt-5 max-w-[62ch] list-disc space-y-2 pl-5 text-secondary">
                    {caseStudy.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>

                <section
                  id="architecture"
                  aria-label="Architecture and Technical Decisions"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">
                    Architecture &amp; Technical Decisions
                  </h2>
                  <FactRow
                    facts={caseStudy.technicalDecisions}
                    className="mt-5 max-w-[52rem]"
                  />
                </section>

                <section
                  id="testing-release"
                  aria-label="Testing and Release"
                  className={SECTION_CLASSES}
                >
                  <h2 className="label-accent">Testing &amp; Release</h2>
                  <h3 className="label mt-6">Testing</h3>
                  <ul className="mt-3 max-w-[62ch] list-disc space-y-2 pl-5 text-secondary">
                    {caseStudy.testing.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <h3 className="label mt-8">Release</h3>
                  <ul className="mt-3 max-w-[62ch] list-disc space-y-2 pl-5 text-secondary">
                    {caseStudy.release.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <>
                {/* Facts */}
                {project.facts.length > 0 ? (
                  <section id="facts" aria-label="Facts" className={SECTION_CLASSES}>
                    <h2 className="label-accent">
                      Facts
                    </h2>
                    <FactRow facts={project.facts} className="mt-5 max-w-[52rem]" />
                  </section>
                ) : null}

                {/* Technology */}
                {project.stack.length > 0 ? (
                  <section id="technology" aria-label="Technology" className={SECTION_CLASSES}>
                    <h2 className="label-accent">
                      Technology
                    </h2>
                    <ul className="mono-data mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {project.stack.map((tech) => (
                        <li key={tech} className="flex items-center gap-3">
                          <span>{tech}</span>
                          <span aria-hidden className="text-border-default">
                            /
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {/* Project details */}
                {project.constraints?.length ||
                project.decisions?.length ||
                project.currentState ? (
                  <section id="details" aria-label="Project details" className={SECTION_CLASSES}>
                    <h2 className="label-accent">
                      Project details
                    </h2>

                    {project.constraints?.length ? (
                      <div className="mt-6">
                        <h3 className="label">
                          Constraints
                        </h3>
                        <FactRow facts={project.constraints} className="mt-3" />
                      </div>
                    ) : null}

                    {project.decisions?.length ? (
                      <div className="mt-10 space-y-10">
                        {project.decisions.map((decision) => (
                          <div key={decision.title}>
                            <h3 className="text-h3 text-primary">{decision.title}</h3>
                            <p className="mt-2 max-w-[62ch]">{decision.body}</p>
                            <p className="mt-3 max-w-[62ch]">
                              <span className="label">
                                Because:{" "}
                              </span>
                              <span>{decision.because}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {project.currentState ? (
                      <div className="mt-10">
                        <h3 className="label">
                          Current state
                        </h3>
                        <p className="mt-3 flex flex-wrap items-center gap-4">
                          <StatusStamp status={project.status} />
                          <span className="max-w-[48ch] text-secondary">
                            {project.currentState.stampNote}
                          </span>
                        </p>
                        <FactRow facts={project.currentState.details} className="mt-4" />
                        <p className="mt-4 mono-note">
                          CONTENT LAST REVIEWED {project.currentState.lastReviewed}
                        </p>
                      </div>
                    ) : null}
                  </section>
                ) : null}
              </>
            )}

            {/* Media: the full image set from media (hero shown above) */}
            {supportingMedia.length > 0 ? (
              <section id="media" aria-label="Media" className={SECTION_CLASSES}>
                <h2 className="label-accent">
                  Media
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {supportingMedia.map((media) => (
                    <MediaFigure
                      key={media.src}
                      media={media}
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 30vw, 45vw"
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {/* External source */}
            {project.links.length > 0 ? (
              <section id="source" aria-label="External source" className={SECTION_CLASSES}>
                <h2 className="label-accent">
                  Source
                </h2>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Bottom navigation: back + prev/next */}
            <nav
              aria-label="Project navigation"
              className="mt-20 border-t border-border-subtle pt-10"
            >
              <BackToWork />

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Link
                  href={`/work/${prev.slug}`}
                  aria-label={`Previous project: ${prev.title}`}
                  className="group/p prev block transition-opacity hover:opacity-90"
                >
                  <p className="label">
                    ← Previous
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-h3 text-primary transition-colors group-hover/p:text-accent">
                    {prev.title}
                  </p>
                </Link>
                <Link
                  href={`/work/${next.slug}`}
                  aria-label={`Next project: ${next.title}`}
                  className="group/n block text-right transition-opacity hover:opacity-90 sm:text-right"
                >
                  <p className="label">
                    Next →
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-h3 text-primary transition-colors group-hover/n:text-accent">
                    {next.title}
                  </p>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </article>
    </main>
  );
}
