import Link from "next/link";
import { landing } from "@/lib/landing-content";

export default function LandingFooter() {
  const { footer } = landing;
  // Static year — keeps this a server component with no per-render Date() call.
  const year = "2026";

  return (
    <footer className="border-t border-[var(--border-color)] px-6 py-12 pb-28 md:px-12 md:pb-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <span className="font-[family-name:var(--font-clash)] text-sm font-medium tracking-widest uppercase">
            SAPPY<span className="text-[var(--accent)]">.ch</span>
          </span>
          <p className="mt-1 text-xs text-[var(--muted)]">{footer.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-[0.15em] uppercase text-[var(--muted)]">
          <Link href="/" className="transition-colors hover:text-[var(--foreground)]">
            {footer.portfolio}
          </Link>
          <Link href="/impressum" className="transition-colors hover:text-[var(--foreground)]">
            {footer.impressum}
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-[var(--foreground)]">
            {footer.datenschutz}
          </Link>
        </div>

        <p className="text-xs text-[var(--muted)]">
          &copy; {year} Sappy. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
