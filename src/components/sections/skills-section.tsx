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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-default bg-surface p-6 transition-colors duration-200 hover:border-accent">
                <p className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border-default bg-bg px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-secondary"
                    >
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
