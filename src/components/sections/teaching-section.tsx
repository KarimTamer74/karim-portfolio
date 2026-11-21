import { ntiProjects } from "@/data/registry";
import { siteFacts } from "@/data/facts";
import { teachingTopics } from "@/data/skills";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";


export function TeachingSection({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="teaching" aria-label="Teaching" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
            04 · TEACHING
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            Teaching is building, <span className="text-gradient">for people</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div
              className="rounded-2xl border border-border-default bg-surface p-8"
              style={{ background: "linear-gradient(160deg, var(--color-glow-1), transparent 60%), var(--color-surface)" }}
            >
              <p className="text-gradient font-sans text-6xl font-extrabold tracking-tight">
                {siteFacts.engineersTrained}
              </p>
              <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                ENGINEERS TRAINED ACROSS {siteFacts.trainingRounds} ROUNDS
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-secondary">
                I teach developers how to turn requirements into software that survives
                outside the classroom: the same Cubit, REST API, and MVVM practices used
                by the systems in my registry.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-muted">
                WHAT I TEACH
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {teachingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border-default bg-surface px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-secondary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl border border-border-default bg-surface p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rotate-45"
                  style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
                />
                <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  CURRICULUM / NTI · {ntiProjects.length} PROJECTS
                </h3>
              </div>
              <ol className="mt-4 divide-y divide-border-subtle border-y border-border-subtle">
                {ntiProjects.map((project, i) => (
                  <li key={project.slug} className="list-none">
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`${project.title} - open project details`}
                      className="group/row -mx-2 flex items-baseline gap-4 rounded-md px-2 py-3 transition-colors duration-150 hover:bg-bg"
                    >
                      <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-sans font-semibold text-primary transition-colors group-hover/row:text-accent">
                        {project.title}
                      </span>
                      <span aria-hidden className="text-muted transition-colors group-hover/row:text-accent">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[15px] leading-relaxed text-secondary">
                {siteFacts.engineersTrained} engineers have completed NTI&apos;s intensive
                hands-on Flutter program across {siteFacts.trainingRounds} rounds, each
                finishing with real applications built and reviewed.
              </p>
              <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
                SOURCE: NTI INSTRUCTOR RECORD · CREATIVA MANSOURA
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
