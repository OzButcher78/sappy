import { landing } from "@/lib/landing-content";
import CtaLink from "./CtaLink";

export default function Pricing() {
  const { pricing } = landing;

  return (
    <section className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="landing-reveal mx-auto max-w-2xl text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
            Preise
          </span>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {pricing.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">{pricing.body}</p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`landing-reveal relative flex flex-col rounded-3xl border bg-[var(--surface)] p-5 sm:p-8 ${
                tier.highlight
                  ? "border-[var(--accent)] shadow-[0_0_50px_rgba(59,159,216,0.12)]"
                  : "border-[var(--border-color)]"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-medium uppercase tracking-widest text-white">
                  Beliebt
                </span>
              )}

              <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{tier.tagline}</p>

              <div className="mt-5 font-[family-name:var(--font-clash)] text-3xl font-bold gradient-text">
                {tier.price}
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="var(--accent-light)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <CtaLink
                className={
                  tier.highlight
                    ? "magnetic-btn group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-all hover:shadow-[0_0_40px_rgba(59,159,216,0.35)]"
                    : "mt-8 inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-6 py-3.5 text-sm uppercase tracking-widest text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }
              >
                <span className="relative z-10">{pricing.cta}</span>
                {tier.highlight && (
                  <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
                )}
              </CtaLink>
            </div>
          ))}
        </div>

        <p className="landing-reveal mx-auto mt-8 max-w-2xl text-center text-xs text-[var(--muted)]">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
