import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

/** Minimal shared chrome for the Impressum / Datenschutz pages. */
export default function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div lang="de" className="min-h-screen">
      <header className="border-b border-[var(--border-color)] px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Sappy Startseite">
            <Image src="/images/logo-trans.png" alt="Sappy" width={32} height={32} className="object-contain" />
            <span className="text-base font-medium tracking-wide font-[family-name:var(--font-clash)]">
              SAPPY<span className="text-[var(--accent)]">.ch</span>
            </span>
          </Link>
          <Link
            href="/auto"
            className="text-xs tracking-[0.15em] uppercase text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            &larr; Zurück
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 md:px-12">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-clash)] text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="legal-prose mt-10 space-y-6 text-[var(--muted)]">{children}</div>
        </article>
      </main>
    </div>
  );
}
