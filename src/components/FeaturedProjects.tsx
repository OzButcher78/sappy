"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Horizontal rule animate
      const hr = sectionRef.current?.querySelector(".hr-animate");
      if (hr) {
        gsap.to(hr, {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: hr,
            start: "top 85%",
          },
        });
      }

      // Project cards stagger
      const cards = projectsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = getFeaturedProjects();

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div ref={headingRef} className="mb-4 opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              01
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              Selected Work
            </span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[var(--muted)]">
            A curated selection of digital products and experiences, each crafted
            with precision and purpose.
          </p>
        </div>

        <div className="hr-animate line-shimmer my-12 h-px w-full bg-[var(--border-color)]" />

        {/* Projects grid */}
        <div
          ref={projectsRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="project-card group block overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] opacity-0"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />

                {/* Year badge */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  {project.url && (
                    <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-wider text-emerald-400 backdrop-blur-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-wider text-white backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="tracking-wider uppercase">
                    {project.url ? "View Live" : "View Project"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <span>View All Projects</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
