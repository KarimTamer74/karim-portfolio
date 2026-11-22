import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";


export function SkillsSection({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="skills" aria-label="Skills" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
            02 · SKILLS
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            What I work <span className="text-gradient">with</span>
          </h2>
          <p className="mt-3 max-w-[52ch] text-secondary">
            The full toolbox, grouped the way I actually use it on projects.
          </p>
        </Reveal>

        <div className="mt-10 space-y-7">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div>
                <p className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  {group.label}
                </p>
                <div className="mt-2.5 flex flex-wrap items-baseline gap-x-5 gap-y-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-primary"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-muted" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
