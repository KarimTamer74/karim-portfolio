import { siteConfig } from "@/lib/site-config";


const nav = [
  ["WORK", "#work"],
  ["SKILLS", "#skills"],
  ["EXPERIENCE", "#experience"],
  ["TEACHING", "#teaching"],
  ["ABOUT", "#about"],
  ["CONTACT", "#contact"],
] as const;

const socials = [
  ["GITHUB ↗", siteConfig.githubUrl],
  ["LINKEDIN ↗", siteConfig.linkedInUrl],
  ["WHATSAPP ↗", siteConfig.whatsappUrl],
  ["EMAIL →", `mailto:${siteConfig.email}`],
] as const;

export function Footer(): React.ReactElement {
  return (
    <footer className="mt-[72px] border-t border-border-subtle md:mt-[96px]">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-sans text-lg font-bold tracking-tight text-primary">
              Karim<span className="text-gradient">.Abo Kamel</span>
            </p>
            <p className="mt-1 font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
              FLUTTER DEVELOPER · INSTRUCTOR AT NTI
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-border-subtle pt-5 sm:flex-row">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
            © {new Date().getFullYear()} KARIM ABO KAMEL
          </p>
        </div>
      </div>
    </footer>
  );
}
