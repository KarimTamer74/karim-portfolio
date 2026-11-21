import Image from "next/image";
import { education, courses } from "@/data/education";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/shared/reveal";


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
          {/* Portrait + credentials */}
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
            <dl className="mt-8 space-y-6 border-t border-border-subtle pt-6">
              <div>
                <dt className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                  EDUCATION
                </dt>
                <dd className="mt-1 text-sm text-primary">
                  {education.degree}
                  <br />
                  <span className="text-secondary">
                    {education.university} · {education.period}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                  INSTRUCTOR AT
                </dt>
                <dd className="mt-1 text-sm text-secondary">NTI · Creativa Mansoura</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
                  CONTINUING EDUCATION
                </dt>
                <dd className="mt-2 space-y-2">
                  {courses.map((course) => (
                    <p key={course.title} className="text-sm text-secondary">
                      {course.title}
                      <span className="block font-mono text-[11px] tracking-wide text-muted">
                        {course.platform} · {course.duration}
                      </span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* The arc */}
          <Reveal delay={0.1} className="lg:col-span-8 lg:pl-8">
            <div className="space-y-8">
              <div className="rounded-2xl border border-border-default bg-surface p-6 md:p-8">
                <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  ACT I / TRAINEE
                </h3>
                <p className="mt-3 leading-relaxed text-secondary">
                  In February 2025 I sat on the other side of NTI&apos;s Flutter track as a
                  trainee. I finished it in March, and it gave me the two things every
                  developer eventually needs: a structure to build against, and the
                  standard to notice when my own code fell short of it.
                </p>
              </div>

              <div className="rounded-2xl border border-border-default bg-surface p-6 md:p-8">
                <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  ACT II / BUILDER
                </h3>
                <p className="mt-3 leading-relaxed text-secondary">
                  Since then I have kept building: an app live on Google Play, an
                  on-device video generator, and a booking platform that is still
                  growing. Shipping is where the real education started.
                </p>
              </div>

              <div className="rounded-2xl border border-border-default bg-surface p-6 md:p-8">
                <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-accent">
                  ACT III / INSTRUCTOR
                </h3>
                <p className="mt-3 leading-relaxed text-secondary">
                  In October 2025, NTI hired me back to teach the track I had just
                  completed. My first round, I was nervous teaching people older than me.
                  Five rounds and 100+ engineers later, teaching is how I keep myself
                  honest: if I can&apos;t explain it clearly, I don&apos;t fully understand
                  it yet.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
