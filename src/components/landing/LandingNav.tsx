import Image from "next/image";
import Link from "next/link";
import { landing } from "@/lib/landing-content";
import CtaLink from "./CtaLink";

/**
 * Stripped landing nav: logo + a single CTA only. No menu, no language
 * switcher, no scroll listeners — every pixel points at one action.
 * Server-rendered; the only interactive bit is the smooth-scroll CtaLink.
 */
export default function LandingNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--border-color)]/60 bg-[var(--background)]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-12 md:py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Sappy Startseite">
          <Image
            src="/images/logo-trans.png"
            alt="Sappy"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="text-lg font-medium tracking-wide font-[family-name:var(--font-clash)]">
            SAPPY<span className="text-[var(--accent)]">.ch</span>
          </span>
        </Link>

        {/* CTA only from md up — on mobile the sticky bottom bar + hero CTA
            already cover it, and the button would otherwise overlap the logo. */}
        <CtaLink className="hidden items-center whitespace-nowrap rounded-full border border-[var(--accent)] px-5 py-2 text-sm tracking-widest uppercase text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--background)] md:inline-flex">
          {landing.nav.cta}
        </CtaLink>
      </div>
    </nav>
  );
}
