import { landing } from "@/lib/landing-content";
import CtaLink from "./CtaLink";

/**
 * Sticky bottom CTA bar, mobile only (md:hidden). Scrolls to the form.
 * Kept slim — the iPhone safe-area inset is folded into the bottom padding
 * (not stacked on top of it) so the bar clears the home indicator without
 * eating extra vertical space. FinalCTA carries matching bottom padding so the
 * bar never covers the submit button.
 */
export default function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--border-color)] bg-[var(--background)]/95 px-4 pt-2 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <CtaLink className="magnetic-btn group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white">
        <span className="relative z-10">{landing.mobileBar.cta}</span>
        <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
      </CtaLink>
    </div>
  );
}
