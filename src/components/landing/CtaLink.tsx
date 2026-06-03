"use client";

import { type ReactNode, type MouseEvent } from "react";

/**
 * Smooth-scrolls to an in-page anchor (default: the contact form) on click.
 * Renders a real <a href> so it still works without JS (instant jump) and is
 * keyboard/right-click friendly — the JS just upgrades it to a smooth scroll.
 * The /auto route deliberately omits Lenis, so we use native scrollIntoView.
 */
export default function CtaLink({
  href = "#kontakt",
  className,
  children,
  ariaLabel,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
