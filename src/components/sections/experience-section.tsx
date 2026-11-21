import { jobs } from "@/data/experience";
import { Reveal } from "@/components/shared/reveal";
import type { Job } from "@/types";


export function ExperienceSection({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="experience" aria-label="Experience" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
            03 · EXPERIENCE
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            Where I have <span className="text-gradient">worked</span>
          </h2>
          <p className="mt-3 max-w-[52ch] text-secondary">
            Increasing responsibility, newest first.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {jobs.map((job, i) => (
            <Reveal key={`${job.position}-${job.organization}`} delay={i * 0.08}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }: { job: Job }): React.ReactElement {
  return (
    <article
      aria-label={`${job.position} at ${job.organization}`}
      className="rounded-2xl border border-border-default bg-surface p-6 transition-colors duration-200 hover:border-accent md:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-[0.14em] text-accent"
          style={{ background: "var(--color-glow-1)" }}
        >
          {job.kind}
        </span>
        <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
          {job.period}
        </p>
      </div>

      <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-primary">
        {job.position}
        <span className="text-secondary"> · {job.organization}</span>
      </h3>

      <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-secondary">{job.summary}</p>

      <ul className="mt-4 max-w-[64ch] space-y-2">
        {job.points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] text-secondary">
            <span
              aria-hidden
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {job.facts && (
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-subtle pt-5">
          {job.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[10px] font-bold tracking-[0.18em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 font-sans text-lg font-bold text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
