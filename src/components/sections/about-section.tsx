import Image from "next/image";
import { education, courses } from "@/data/education";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/shared/reveal";


const acts = [
  {
    label: "ACT I / TRAINEE",
    text: "In February 2025 I sat on the other side of NTI's Flutter track as a trainee. I finished it in March, and it gave me the two things every developer eventually needs: a structure to build against, and the standard to notice when my own code fell short of it.",
  },
  {
    label: "ACT II / BUILDER",
    text: "Since then I have kept building: an app live on Google Play, an on-device video generator, and a booking platform that is still growing. Shipping is where the real education started.",
  },
  {
    label: "ACT III / INSTRUCTOR",
    text: "In October 2025, NTI hired me back to teach the track I had just completed. My first round, I was nervous teaching people older than me. Six rounds and 120+ engineers later, teaching is how I keep myself honest: if I can't explain it clearly, I don't fully understand it yet.",
  },
] as const;

export function AboutSection({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="about" aria-label="About" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
            05 · ABOUT
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            The person behind <span className="text-gradient">the apps</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div
              className="w-fit rounded-3xl p-1"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            >
              <Image
                src={siteConfig.profileImage}
                alt={`Portrait of ${siteConfig.name}`}
                width={400}
                height={400}
                sizes="(min-width: 1024px) 20rem, 70vw"
                className="w-64 rounded-[20px] border-4 border-bg object-cover object-[center_22%]"
              />
            </div>
            <p className="mt-8 text-sm text-secondary">
              <span className="font-semibold text-primary">{education.degree}</span>
              <span className="block font-mono text-[11px] tracking-wide text-muted">
                {education.university} · {education.period} · INSTRUCTOR AT NTI · CREATIVA MANSOURA
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8 lg:pl-8">
            <div>
              {acts.map((act, i) => (
                <div
                  key={act.label}
                  className={`py-6 ${i > 0 ? "border-t border-border-default" : ""} ${i === 0 ? "pt-0" : ""}`}
                >
                  <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                    {act.label}
                  </h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-secondary">{act.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
              CONTINUING EDUCATION · {courses.length} COURSES
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-xl border border-border-default bg-surface p-5"
                  style={{ borderTop: "2px solid var(--color-accent)" }}
                >
                  <p className="font-sans text-[15px] font-semibold leading-snug text-primary">
                    {course.title}
                  </p>
                  <p className="mt-2 font-mono text-[10px] font-bold tracking-[0.14em] text-muted">
                    {course.platform} · {course.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
