"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "100%", label: "Swiss Quality" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="about-heading opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              03
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              About
            </span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Craftsman
          </h2>
        </div>

        <div className="about-hr line-shimmer line-shimmer-delay-2 my-12 h-px w-full origin-left bg-[var(--border-color)]" />

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Image column */}
          <div className="about-image opacity-0 lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)]">
              <div className="aspect-[3/4] bg-[var(--surface)]">
                <Image
                  src="/images/logo-trans.png"
                  alt="Sappy - Dieter Balmer"
                  fill
                  className="object-contain p-12"
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--accent)] opacity-10 blur-2xl" />
            </div>
          </div>

          {/* Text column */}
          <div className="about-text opacity-0 lg:col-span-3">
            <p className="text-2xl font-light leading-relaxed text-[var(--foreground)] sm:text-3xl">
              I&apos;m Dieter Balmer — Swiss entrepreneur, automotive
              enthusiast, and self-taught developer since 1988.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              I wrote my first lines of code at the age of 10 and never stopped.
              That early curiosity evolved into a lifelong passion for building
              things — from digital products and web platforms to hands-on
              craftsmanship in the automotive world.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Today I run my own businesses as a specialist in Paintless Dent
              Repair (PDR) and as a designer and manufacturer of professional
              PDR tools and accessories — sold to technicians around the world.
              Alongside that, I continue to design and develop software, apps,
              and digital experiences. Where others see different worlds, I see
              the same drive — precision, problem-solving, and the pursuit of
              a flawless finish.
            </p>

            {/* Tech stack */}
            <div className="mt-10">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
                Core Technologies
              </span>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "React Native",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "AWS",
                  "Vercel",
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
              {stats.map((stat) => (
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
