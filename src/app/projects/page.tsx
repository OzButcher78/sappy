"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { I18nProvider, useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

const categories = ["all", "web", "app", "tool"] as const;

export default function ProjectsPage() {
  return (
    <I18nProvider>
      <ProjectsPageContent />
    </I18nProvider>
  );
}

function ProjectsPageContent() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card-all");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeFilter]);

  const categoryLabels: Record<string, string> = {
    all: t.projectsPage.categories.all,
    web: t.projectsPage.categories.web,
    app: t.projectsPage.categories.app,
    tool: t.projectsPage.categories.tool,
  };

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
          {t.projectsPage.back}
        </Link>
      </div>

      {/* Header */}
      <div className="px-6 pt-32 pb-12 md:px-12">
        <div ref={headingRef} className="mx-auto max-w-[1400px] opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              {t.projectsPage.sectionLabel}
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              {projects.length} {t.projectsPage.projectCount}
            </span>
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            {t.projectsPage.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            {t.projectsPage.description}
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--border-color)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)]"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="line-shimmer line-shimmer-delay-2 mt-10 h-px w-full bg-[var(--border-color)]" />
        </div>
      </div>

      {/* Projects grid */}
      <div className="px-6 pb-32 md:px-12">
        <div
          ref={gridRef}
          className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mx-auto max-w-[1400px] pt-20 text-center text-[var(--muted)]">
            {t.projectsPage.noProjects}
          </p>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useI18n();
  const subtitle = locale === "de" && project.subtitleDe ? project.subtitleDe : project.subtitle;
  const description = locale === "de" && project.descriptionDe ? project.descriptionDe : project.description;
  const tags = locale === "de" && project.tagsDe ? project.tagsDe : project.tags;

  return (
    <Link
      href={`/project/${project.slug}`}
      className="project-card-all group block overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] opacity-0 transition-all duration-500 hover:border-[var(--accent)]/30 hover:shadow-[0_8px_40px_rgba(59,159,216,0.08)]"
      style={{ transform: "translateY(0)" }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />

        {/* Badges */}
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

        {/* Category badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs capitalize tracking-wider text-white/70 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>

        {/* Description preview */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]/70">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="tracking-wider uppercase">
              {project.url ? t.projectsPage.viewLive : t.projectsPage.viewDetails}
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

          {project.url && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(project.url, '_blank', 'noopener,noreferrer');
              }}
              className="rounded-full border border-[var(--border-color)] p-2 text-[var(--muted)] opacity-0 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] group-hover:opacity-100"
              title="Visit live site"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5.5 2.5h6v6M11.5 2.5l-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
