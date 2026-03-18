"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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
        ".services-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
          },
        }
      );

      // HR
      gsap.fromTo(
        ".services-hr",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".services-hr",
            start: "top 85%",
          },
        }
      );

      // Service cards
      const cards = sectionRef.current?.querySelectorAll(".service-card");
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="services-heading opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.services.sectionNumber}
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              {t.services.sectionLabel}
            </span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[var(--muted)]">
            {t.services.description}
          </p>
        </div>

        <div className="services-hr line-shimmer line-shimmer-delay-1 my-12 h-px w-full origin-left bg-[var(--border-color)]" />

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service) => (
            <div
              key={service.number}
              onMouseMove={handleMouseMove}
              className="service-card service-card-glow group rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-8 opacity-0 transition-all duration-500 hover:border-[var(--accent)]/30 md:p-10"
            >
              {/* Number */}
              <span className="font-[family-name:var(--font-clash)] text-4xl font-bold text-[var(--accent)] opacity-20">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-4 font-[family-name:var(--font-clash)] text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-[var(--border-color)] px-4 py-1.5 text-xs tracking-wider text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/20 group-hover:text-[var(--foreground)]"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
