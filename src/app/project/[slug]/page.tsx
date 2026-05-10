"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = getProjectBySlug(slug as string);
  const screenshots = project?.screenshots ?? [];

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % screenshots.length
    );
  }, [screenshots.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

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

      // Screenshots stagger
      const shots = containerRef.current?.querySelectorAll(".project-screenshot");
      if (shots && shots.length) {
        gsap.fromTo(
          shots,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".project-screenshots", start: "top 85%" },
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
          {(project.url || project.status === "private") && (
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
                {t.projectDetail.status}
              </span>
              <p className="mt-1 flex items-center gap-2 text-[var(--foreground)]">
                {project.status === "private" ? (
                  <>
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                    {t.projectDetail.private}
                  </>
                ) : (
                  <>
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t.projectDetail.live}
                  </>
                )}
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

        {/* Private app note */}
        {!project.url && project.status === "private" && (
          <div className="project-cta mt-16 flex justify-center opacity-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-sm tracking-[0.15em] uppercase text-amber-300">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              <span>{t.projectDetail.privateNote}</span>
            </div>
          </div>
        )}

        {/* Screenshots gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="project-screenshots mt-24">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.projectDetail.screenshots}
            </span>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="project-screenshot group relative block overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] opacity-0 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_8px_40px_rgba(59,159,216,0.12)] focus:outline-none focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                  aria-label={`Open screenshot ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/40 bg-black/40 px-4 py-2 text-xs tracking-[0.2em] uppercase text-white backdrop-blur-sm">
                      {t.projectDetail.expand}
                    </span>
                  </span>
                </button>
              ))}
            </div>
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

      {/* Lightbox */}
      {lightboxIndex !== null && screenshots[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.projectDetail.screenshots}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all hover:border-white/60 hover:bg-black/60 sm:right-6 sm:top-6"
            aria-label={t.projectDetail.close}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-white/80 sm:top-6">
            {lightboxIndex + 1} / {screenshots.length}
          </div>

          {screenshots.length > 1 && (
            <>
              {/* Prev */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all hover:border-white/60 hover:bg-black/60 sm:left-6 sm:h-14 sm:w-14"
                aria-label={t.projectDetail.previous}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all hover:border-white/60 hover:bg-black/60 sm:right-6 sm:h-14 sm:w-14"
                aria-label={t.projectDetail.next}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={screenshots[lightboxIndex]}
              src={screenshots[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              width={1920}
              height={1280}
              className="max-h-full max-w-full object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
