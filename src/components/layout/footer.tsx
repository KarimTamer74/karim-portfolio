import { siteConfig } from "@/lib/site-config";

export function Footer(): React.ReactElement {
  return (
    <footer className="mt-[72px] border-t border-border-subtle md:mt-[96px]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="font-sans text-lg font-bold tracking-tight text-primary">
              Karim<span className="text-gradient">.Tamer</span>
            </p>
            <p className="mt-1 font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
              FLUTTER DEVELOPER · INSTRUCTOR AT NTI
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-2">
            {[
              ["WORK", "#work"],
              ["SKILLS", "#skills"],
              ["EXPERIENCE", "#experience"],
              ["TEACHING", "#teaching"],
              ["ABOUT", "#about"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="w-fit font-mono text-[11px] font-semibold tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>

          <ul className="space-y-2">
            {[
              ["GITHUB ↗", siteConfig.githubUrl],
              ["LINKEDIN ↗", siteConfig.linkedInUrl],
              ["WHATSAPP ↗", siteConfig.whatsappUrl],
              ["EMAIL →", `mailto:${siteConfig.email}`],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="w-fit font-mono text-[11px] font-semibold tracking-[0.18em] text-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-border-subtle pt-6 text-center font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
          <p>© {new Date().getFullYear()} KARIM TAMER</p>
        </div>
      </div>
    </footer>
  );
}
