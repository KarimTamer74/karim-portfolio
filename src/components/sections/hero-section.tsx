import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { siteConfig } from "@/lib/site-config";

const SKILLS = [
  "FLUTTER",
  "DART",
  "CUBIT",
  "BLOC",
  "FIREBASE",
  "REST APIS",
  "CLEAN ARCHITECTURE",
  "MVVM",
  "SQLITE",
  "CI / CD",
] as const;

const SOCIALS = [
  { label: "GitHub", href: siteConfig.githubUrl, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.linkedInUrl, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, Icon: MessageCircle },
] as const;




export function HeroSection(): React.ReactElement {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft color glows behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-36 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "var(--color-glow-1)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "var(--color-glow-2)" }}
      />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-14 md:pt-20 lg:grid-cols-12">
        {/* text column */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface px-4 py-2 text-[13px] font-semibold text-accent">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))" }}
            />
            {siteConfig.role} · Instructor at NTI
          </span>

          <h1 className="mt-6 font-sans text-5xl font-extrabold tracking-tight text-primary md:text-7xl">
            Karim <span className="text-gradient">Abo Kamel</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-secondary lg:mx-0">
            I build mobile apps people use, and teach others to build theirs. Apps
            live on Google Play, and 120+ engineers trained at NTI so far.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
            <a
              href="#work"
              className="btn-gradient rounded-full px-6 py-3.5 text-[15px] font-semibold"
            >
              View my work
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="rounded-full border border-border-default bg-surface px-6 py-3.5 text-[15px] font-semibold text-primary transition-colors hover:border-accent"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border-default bg-surface px-6 py-3.5 text-[15px] font-semibold text-primary transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* photo column */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--color-glow-1), var(--color-glow-2))" }}
            />
            <div
              className="relative rotate-2 rounded-[2rem] p-1.5 transition-transform duration-300 hover:rotate-0"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            >
              <Image
                src="/images/me-graduation.jpg"
                alt="Karim Abo Kamel"
                width={360}
                height={440}
                priority
                className="h-auto w-64 rounded-[1.7rem] border-4 border-bg object-cover object-[center_22%] md:w-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* skills marquee: edge fades, gradient separators, hover pause */}
      <div className="relative overflow-hidden border-y border-border-subtle py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
        />
        <div className="animate-marquee marquee-track flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1} className="flex items-center">
              {SKILLS.map((skill) => (
                <span
                  key={`${copy}-${skill}`}
                  className="flex items-center font-mono text-sm font-semibold tracking-[0.22em] text-secondary"
                >
                  <span className="px-6">{skill}</span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rotate-45"
                    style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
                  />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
