import { landing } from "@/lib/landing-content";

export default function Problem() {
  const { problem } = landing;

  return (
    <section className="relative px-6 py-20 md:px-12">
      <div className="landing-reveal mx-auto max-w-[1400px]">
        <h2 className="max-w-3xl text-balance font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {problem.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {problem.body}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {problem.pains.map((pain, i) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6"
            >
              <span className="block text-center font-[family-name:var(--font-mono)] text-sm text-[var(--accent)] sm:text-left">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-clash)] text-lg font-semibold">
                {pain.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
