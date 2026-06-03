import { landing } from "@/lib/landing-content";

/**
 * FAQ as native <details>/<summary> — accessible, keyboard-friendly and works
 * with zero JavaScript (important on this no-Lenis, lean route).
 */
export default function FAQ() {
  const { faq } = landing;

  return (
    <section className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="landing-reveal text-balance text-center font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {faq.heading}
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="landing-reveal group rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] px-6 open:border-[var(--accent)]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-[family-name:var(--font-clash)] text-base font-medium sm:text-lg">
                {item.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 leading-relaxed text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
