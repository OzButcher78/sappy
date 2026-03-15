"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-trans.png"
              alt="Sappy"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-sm font-medium tracking-widest uppercase font-[family-name:var(--font-clash)]">
              Sappy
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Work", "Services", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Location & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
              <span>Made in</span>
              {/* Animated Swiss flag */}
              <span className="group relative inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#FF0000] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_12px_rgba(255,0,0,0.4)]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="transition-transform duration-700 group-hover:rotate-90"
                >
                  <rect x="4" y="1.5" width="2" height="7" rx="0.5" fill="white" />
                  <rect x="1.5" y="4" width="7" height="2" rx="0.5" fill="white" />
                </svg>
              </span>
              <span>Switzerland</span>
            </div>
            <p className="text-xs text-[var(--muted)]">
              &copy; {currentYear} Sappy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
