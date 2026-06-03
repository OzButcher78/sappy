import Image from "next/image";
import { landing } from "@/lib/landing-content";
import { getAutomotiveProjects } from "@/lib/projects";
import CtaLink from "./CtaLink";

/**
 * Above-the-fold hero. Fully server-rendered with NO entrance animation,
 * NO overlay-wipe, NO Lenis — the headline + CTA + a real client thumbnail
 * paint on first byte so cold mobile ad traffic sees the message instantly.
 */
export default function LandingHero() {
  const { hero } = landing;
  // Curated hero thumbnails (independent of the proof-row order below).
  const HERO_SLUGS = ["autoausbeulen", "iasre-japan", "pdrkalk-website"];
  const automotive = getAutomotiveProjects();
  const thumbs = HERO_SLUGS.map((slug) =>
    automotive.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-36">
      {/* Static background accents (CSS only, no JS) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[var(--accent-light)] opacity-[0.03] blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-[var(--muted)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Websites für die Autobranche
          </span>

          <h1 className="mt-6 text-balance font-[family-name:var(--font-clash)] text-[clamp(1.7rem,6.5vw,3.75rem)] font-bold leading-[1.12] tracking-tight">
            {hero.h1}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            {hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink className="magnetic-btn group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-medium uppercase tracking-wide text-white transition-all hover:shadow-[0_0_40px_rgba(59,159,216,0.35)] sm:inline-flex sm:w-auto sm:px-8">
              <span className="relative z-10">{hero.cta}</span>
              <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
            </CtaLink>
          </div>

          {/* Trust strip */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="var(--accent)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Real client-site thumbnails */}
        <div>
          <p className="mb-4 text-sm text-[var(--muted)] lg:text-right">{hero.thumbsLabel}</p>
          <div className="grid grid-cols-2 gap-4">
            {thumbs.map((p, i) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface)] ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={p.image}
                    alt={`Website für ${p.title}`}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      p.slug === "pdrkalk-website" ? "object-left" : "object-center"
                    }`}
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-70" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {p.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
