"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";
import { I18nProvider, useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  return (
    <I18nProvider>
      <ProjectPageContent />
    </I18nProvider>
  );
}

function ProjectPageContent() {
  const { t, locale } = useI18n();
  const { slug } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const project = getProjectBySlug(slug as string);

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero image reveal
      gsap.fromTo(
        ".project-hero-image",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 }
      );

      // Title reveal
      gsap.fromTo(
        ".project-title",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Meta info
      gsap.fromTo(
        ".project-meta",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.7 }
      );

      // Description
      gsap.fromTo(
        ".project-description",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".project-description", start: "top 85%" },
        }
      );

      // CTA button
      const cta = containerRef.current?.querySelector(".project-cta");
      if (cta) {
        gsap.fromTo(
          cta,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: cta, start: "top 90%" },
          }
        );
      }

      // Next project
      gsap.fromTo(
        ".next-project",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".next-project", start: "top 85%" },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{t.projectDetail.notFound}</h1>
          <Link
            href="/"
            className="mt-4 inline-block text-[var(--accent)] hover:underline"
          >
            {t.projectDetail.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Back navigation */}
      <div className="fixed left-6 top-6 z-50 md:left-12">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--background)]/80 px-4 py-2 text-sm backdrop-blur-xl transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4L6 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t.projectDetail.back}
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative h-[60vh] overflow-hidden sm:h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="project-hero-image object-cover opacity-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[900px] px-6 md:px-12">
        {/* Title */}
        <div className="project-title -mt-20 relative z-10 opacity-0">
          <div className="flex flex-wrap items-center gap-3">
            {(locale === "de" && project.tagsDe ? project.tagsDe : project.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs tracking-wider text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-2 text-xl text-[var(--muted)]">
            {locale === "de" && project.subtitleDe ? project.subtitleDe : project.subtitle}
          </p>
        </div>

        {/* Meta */}
        <div className="project-meta mt-10 grid grid-cols-2 gap-6 opacity-0 sm:grid-cols-3">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.projectDetail.year}
            </span>
            <p className="mt-1 text-[var(--foreground)]">{project.year}</p>
          </div>
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.projectDetail.category}
            </span>
            <p className="mt-1 capitalize text-[var(--foreground)]">
              {project.category}
            </p>
          </div>
          {project.url && (
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
                {t.projectDetail.status}
              </span>
              <p className="mt-1 flex items-center gap-2 text-[var(--foreground)]">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {t.projectDetail.live}
              </p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="line-shimmer line-shimmer-delay-4 my-12 h-px w-full bg-[var(--border-color)]" />

        {/* Description */}
        <div className="project-description opacity-0">
          <p className="text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            {locale === "de" && project.descriptionDe ? project.descriptionDe : project.description}
          </p>
        </div>

        {/* Visit Live Site CTA */}
        {project.url && (
          <div className="project-cta mt-16 flex justify-center opacity-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--accent)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 hover:shadow-[0_0_40px_rgba(59,159,216,0.25)] hover:scale-[1.02]"
            >
              {/* Animated background shimmer */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {/* Pulsing dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="relative">{t.projectDetail.visitLive}</span>

              {/* External link icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                <path
                  d="M7 3h8v8M15 3L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}

        {/* Next project */}
        <div className="next-project mt-32 mb-20 border-t border-[var(--border-color)] pt-12 opacity-0">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">
            {t.projectDetail.nextProject}
          </span>
          <Link
            href={`/project/${nextProject.slug}`}
            className="group mt-4 flex items-center justify-between"
          >
            <h3 className="font-[family-name:var(--font-clash)] text-3xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-4xl">
              {nextProject.title}
            </h3>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--accent)]"
            >
              <path
                d="M8 16h16M18 10l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
