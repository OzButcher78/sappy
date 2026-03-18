"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useI18n, type Locale } from "@/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2.5 }
      );
    }
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "de" : "en");
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 opacity-0 ${
          scrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-color)]"
            : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" className="relative z-[101] flex items-center gap-3">
            <Image
              src="/images/logo-trans.png"
              alt="Sappy"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-medium tracking-wide font-[family-name:var(--font-clash)]">
              SAPPY<span className="text-[var(--accent)]">.ch</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="line-decoration text-sm tracking-widest uppercase text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </button>
            ))}

            {/* Language switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 text-xs tracking-widest uppercase text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Switch language"
            >
              <span className={locale === "en" ? "text-[var(--accent)]" : ""}>
                EN
              </span>
              <span className="text-[var(--border-color)]">/</span>
              <span className={locale === "de" ? "text-[var(--accent)]" : ""}>
                DE
              </span>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-full border border-[var(--accent)] px-6 py-2 text-sm tracking-widest uppercase text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              {t.nav.letsTalk}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[101] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 bg-[var(--foreground)]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-6 bg-[var(--foreground)]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 bg-[var(--foreground)]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[var(--background)]"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-4xl font-light tracking-wide font-[family-name:var(--font-clash)]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 rounded-full border border-[var(--accent)] px-8 py-3 text-lg tracking-widest uppercase text-[var(--accent)]"
              >
                {t.nav.letsTalk}
              </motion.button>

              {/* Mobile language switcher */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                onClick={toggleLocale}
                className="mt-2 flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--muted)]"
                aria-label="Switch language"
              >
                <span
                  className={locale === "en" ? "text-[var(--accent)]" : ""}
                >
                  EN
                </span>
                <span className="text-[var(--border-color)]">/</span>
                <span
                  className={locale === "de" ? "text-[var(--accent)]" : ""}
                >
                  DE
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
