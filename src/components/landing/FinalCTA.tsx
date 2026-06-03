import { landing } from "@/lib/landing-content";
import ContactForm from "@/components/ContactForm";

/**
 * Closing section + lead-capture form. `id="kontakt"` is the scroll target for
 * every CTA on the page (hero, nav, pricing, sticky mobile bar). Extra bottom
 * padding leaves room for the sticky MobileCTABar so it never covers the
 * submit button.
 */
export default function FinalCTA() {
  const { finalCta } = landing;

  return (
    <section id="kontakt" className="relative scroll-mt-24 px-6 py-20 pb-28 md:px-12 md:pb-24">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.04] blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1100px] items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-balance font-[family-name:var(--font-clash)] text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {finalCta.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            {finalCta.sub}
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface)]/60 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
