import { landing } from "@/lib/landing-content";

export default function HowItWorks() {
  const { how } = landing;

  return (
    <section className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="landing-reveal max-w-2xl">
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
            So läuft es ab
          </span>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {how.heading}
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">{how.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {how.steps.map((step) => (
            <div
              key={step.number}
              className="landing-reveal relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-8"
            >
              <span className="block text-center font-[family-name:var(--font-clash)] text-5xl font-bold text-[var(--accent)]/25 sm:text-left">
                {step.number}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-clash)] text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
