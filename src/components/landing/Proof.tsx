import Image from "next/image";
import { landing } from "@/lib/landing-content";
import { getAutomotiveProjects } from "@/lib/projects";
import CategoryBadge from "@/components/CategoryBadge";

export default function Proof() {
  const { proof } = landing;
  const projects = getAutomotiveProjects().slice(0, 8);

  return (
    <section className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="landing-reveal">
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
            Echte Projekte
          </span>
          <h2 className="mt-4 max-w-3xl text-balance font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {proof.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {proof.insider}
          </p>
        </div>

        {/* Project grid — links open the real, live sites */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card landing-reveal group block overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Website für ${p.title}`}
                  fill
                  className="project-image object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
                <CategoryBadge category={p.category} locale="de" className="absolute left-3 top-3" />
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-wider text-emerald-400 backdrop-blur-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-clash)] text-base font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {p.subtitleDe ?? p.subtitle}
                </p>

                {/* Descriptor pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(p.tagsDe ?? p.tags).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--surface-elevated)] px-2.5 py-1 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {proof.viewLive}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Stat band */}
        <div className="landing-reveal mt-16 grid gap-8 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] px-8 py-10 sm:grid-cols-3">
          {proof.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-clash)] text-4xl font-bold gradient-text sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm tracking-wider uppercase text-[var(--muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
