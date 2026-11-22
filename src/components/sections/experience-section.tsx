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

        <div className="mt-8">
          {jobs.map((job, i) => (
            <Reveal key={`${job.position}-${job.organization}`} delay={i * 0.08}>
              <Row job={job} divided={i > 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ job, divided }: { job: Job; divided: boolean }): React.ReactElement {
  return (
    <article
      aria-label={`${job.position} at ${job.organization}`}
      className={`py-8 ${divided ? "border-t border-border-default" : ""}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-sans text-xl font-bold tracking-tight text-primary">
          {job.position}
          <span className="text-secondary"> · {job.organization}</span>
        </h3>
        <p className="font-mono text-[12px] font-bold tracking-[0.16em] text-accent">
          {job.period}
        </p>
      </div>

      <p className="mt-1 font-mono text-[10px] font-bold tracking-[0.16em] text-muted">
        {job.kind}
      </p>

      <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-secondary">{job.summary}</p>

      <ul className="mt-4 max-w-[64ch] space-y-2">
        {job.points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] text-secondary">
            <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {job.facts && (
        <dl className="mt-5 flex flex-wrap gap-2.5">
          {job.facts.map((fact) => (
            <div
              key={fact.label}
              className="inline-flex items-baseline gap-2 rounded-full border border-border-default bg-surface px-3.5 py-1.5"
            >
              <dd className="font-sans text-[14px] font-bold text-primary">{fact.value}</dd>
              <dt className="font-mono text-[9px] font-bold tracking-[0.14em] text-muted">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
