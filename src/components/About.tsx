"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        ".about-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: ".about-heading", start: "top 85%" },
        }
      );

      // HR
      gsap.fromTo(
        ".about-hr",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".about-hr", start: "top 85%" },
        }
      );

      // Image parallax
      gsap.fromTo(
        ".about-image",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        }
      );

      // Logo gentle float — same as hero
      gsap.to(".about-logo-img", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text content
      gsap.fromTo(
        ".about-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        }
      );

      // Stats
      const statEls = sectionRef.current?.querySelectorAll(".stat-item");
      if (statEls) {
        gsap.fromTo(
          statEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: { trigger: statEls[0], start: "top 85%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="about-heading opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.about.sectionNumber}
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              {t.about.sectionLabel}
            </span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="about-hr line-shimmer line-shimmer-delay-2 my-12 h-px w-full origin-left bg-[var(--border-color)]" />

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Image column */}
          <div className="about-image opacity-0 lg:col-span-2 lg:self-stretch">
            <div
              onMouseMove={handleMouseMove}
              className="service-card-glow relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] transition-all duration-500 hover:border-[var(--accent)]/30 h-full"
            >
              <div className="relative z-[1] aspect-square lg:aspect-auto lg:h-full bg-transparent flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing glow layers — same style as hero */}
                  <div className="absolute inset-0 -m-6 animate-logo-glow rounded-full bg-[var(--accent)] opacity-[0.08] blur-[30px]" />
                  <div className="absolute inset-0 -m-3 animate-logo-glow-inner rounded-full bg-[var(--accent-light)] opacity-[0.06] blur-[20px]" />
                  {/* Logo */}
                  <Image
                    src="/images/logo-trans.png"
                    alt="Sappy - Dieter Balmer"
                    width={160}
                    height={160}
                    className="about-logo-img relative z-10 h-28 w-28 sm:h-36 sm:w-36 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Quote at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                <p className="text-center text-sm italic text-[var(--muted)]">
                  &ldquo;{t.about.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="about-text opacity-0 lg:col-span-3">
            <p className="text-2xl font-light leading-relaxed text-[var(--foreground)] sm:text-3xl">
              {t.about.intro}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              {t.about.paragraph1}
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              {t.about.paragraph2}
            </p>

            {/* Tech stack */}
            <div className="mt-10">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
                {t.about.coreTechnologies}
              </span>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Python",
                  "Tailwind CSS",
                  "React",
                  "Node.js",
                  "SQL",
                  "Next.js",
                  "CMS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="stat-item opacity-0">
                  <div className="font-[family-name:var(--font-clash)] text-3xl font-bold text-[var(--accent)] sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
