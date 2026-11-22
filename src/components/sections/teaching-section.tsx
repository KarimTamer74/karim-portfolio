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
          <p className="mt-3 max-w-[52ch] text-secondary">
            I teach developers how to turn requirements into software that survives
            outside the classroom: the same Cubit, REST API, and MVVM practices used
            by the systems in my registry.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border border-border-default bg-surface p-6"
                style={{ background: "linear-gradient(160deg, var(--color-glow-1), transparent 60%), var(--color-surface)" }}
              >
                <p className="text-gradient font-sans text-5xl font-extrabold tracking-tight">
                  {siteFacts.engineersTrained}
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold tracking-[0.18em] text-muted">
                  ENGINEERS TRAINED
                </p>
              </div>
              <div
                className="rounded-2xl border border-border-default bg-surface p-6"
                style={{ background: "linear-gradient(160deg, var(--color-glow-1), transparent 60%), var(--color-surface)" }}
              >
                <p className="text-gradient font-sans text-5xl font-extrabold tracking-tight">
                  {siteFacts.trainingRounds}
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold tracking-[0.18em] text-muted">
                  ROUNDS
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                WHAT I TEACH
              </h3>
              <div className="mt-2.5 flex flex-wrap items-baseline gap-x-5 gap-y-2.5">
                {teachingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-primary"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-muted" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl border border-border-default bg-surface p-6 md:p-8">
              <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                CURRICULUM / NTI · {ntiProjects.length} PROJECTS
              </h3>
              <ol className="mt-3">
                {ntiProjects.map((project, i) => (
                  <li
                    key={project.slug}
                    className={`list-none ${i > 0 ? "border-t border-border-default" : ""}`}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`${project.title} - open project details`}
                      className="group/row -mx-2 flex items-baseline gap-4 rounded-md px-2 py-3.5 transition-colors duration-150 hover:bg-bg"
                    >
                      <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-sans text-[17px] font-semibold text-primary transition-colors group-hover/row:text-accent">
                        {project.title}
                      </span>
                      <span aria-hidden className="text-muted transition-colors group-hover/row:text-accent">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-[15px] leading-relaxed text-secondary">
                {siteFacts.engineersTrained} engineers have completed NTI&apos;s intensive
                hands-on Flutter program across {siteFacts.trainingRounds} rounds, each
                finishing with real applications built and reviewed.
              </p>
              <p className="mt-3 font-mono text-[10px] font-semibold tracking-[0.18em] text-muted">
                SOURCE: NTI INSTRUCTOR RECORD · CREATIVA MANSOURA
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
