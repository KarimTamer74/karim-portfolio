import { contactGroups } from "@/data/contact";
import { ContactForm } from "@/components/shared/contact-form";
import { Reveal } from "@/components/shared/reveal";


export function ContactSection({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="contact" aria-label="Contact" className={`scroll-mt-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[12px] font-bold tracking-[0.22em] text-accent">
              06 · CONTACT
            </p>
            <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-primary [text-wrap:balance] md:text-4xl">
              Have a product that needs a <span className="text-gradient">builder</span>?
            </h2>
            <p className="mt-4 text-secondary">
              For hiring, freelance work, or a technical conversation, choose the channel
              that fits.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-8">
              {contactGroups.map((group) => (
                <div key={group.audience}>
                  <h3 className="font-mono text-[11px] font-bold tracking-[0.22em] text-muted">
                    {group.audience}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {group.channels.map((channel) => (
                      <li key={channel.id}>
                        <a
                          href={channel.href}
                          {...(channel.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          {...(channel.id === "resume" ? { download: true } : {})}
                          className="group flex items-center justify-between gap-3 rounded-2xl border border-border-default bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent"
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <channel.icon className="size-4 shrink-0 text-accent" aria-hidden />
                            <span className="font-sans font-semibold text-primary transition-colors group-hover:text-accent">
                              {channel.label}
                            </span>
                          </span>
                          <span className="min-w-0 truncate font-mono text-[11px] tracking-wide text-muted">
                            {channel.value}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
