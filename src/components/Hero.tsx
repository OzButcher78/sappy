"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial overlay wipe
      tl.fromTo(
        overlayRef.current,
        { scaleY: 1 },
        { scaleY: 0, duration: 1.2, ease: "power4.inOut" }
      );

      // Logo entrance — scale up and fade
      tl.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "back.out(1.7)" },
        "-=0.4"
      );

      // Title lines reveal with stagger
      const titleLines = titleRef.current?.querySelectorAll(".title-line");
      if (titleLines) {
        tl.fromTo(
          titleLines,
          { y: 120, opacity: 0, skewY: 5 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      // Subtitle fade up
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      // Continuous logo float
      gsap.to(logoRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Overlay wipe */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-30 origin-top bg-[var(--accent)]"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[var(--accent-light)] opacity-[0.02] blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-1/4 top-0 h-full w-px bg-[var(--foreground)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--foreground)]" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-[var(--foreground)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div ref={logoRef} className="relative mb-10 opacity-0">
          {/* Pulsing glow layers */}
          <div className="absolute inset-0 -m-8 animate-logo-glow rounded-full bg-[var(--accent)] opacity-[0.12] blur-[60px]" />
          <div className="absolute inset-0 -m-4 animate-logo-glow-inner rounded-full bg-[var(--accent-light)] opacity-[0.08] blur-[40px]" />
          <Image
            src="/images/logo-trans.png"
            alt="Sappy Logo"
            width={160}
            height={160}
            className="relative h-24 w-24 drop-shadow-[0_0_40px_rgba(59,159,216,0.3)] sm:h-40 sm:w-40"
            priority
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-clash)] text-[clamp(1.5rem,7vw,2.75rem)] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="title-line block overflow-hidden">
            <span className="inline-block">Digital</span>
          </span>
          <span className="title-line block overflow-hidden">
            <span className="inline-block gradient-text">Craftsmanship</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] opacity-0 sm:text-xl"
        >
          Digital portfolio of an IT enthusiast — from web design and web apps
          to CAD modelling and 3D printing projects.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex w-full flex-col items-center gap-3 opacity-0 sm:w-auto sm:flex-row sm:gap-4">
          <button
            onClick={scrollToWork}
            className="magnetic-btn group relative w-full overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-medium tracking-widest uppercase text-white transition-all hover:shadow-[0_0_30px_rgba(59,159,216,0.3)] sm:w-auto"
          >
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="magnetic-btn w-full rounded-full border border-[var(--border-color)] px-8 py-4 text-sm tracking-widest uppercase text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 opacity-0 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-[var(--border-color)]">
            <div className="animate-scroll-line absolute left-0 top-0 h-1/2 w-full bg-[var(--accent)]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-line {
          animation: scroll-line 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
