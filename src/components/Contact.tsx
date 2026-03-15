"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const openMail = () => {
  const u = "dieterbalmer";
  const d = "gmail.com";
  window.location.href = `mailto:${u}@${d}`;
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-hr",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".contact-hr", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-cta",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".contact-cta", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-details",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: { trigger: ".contact-details", start: "top 90%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 py-32 md:px-12"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.02] blur-[150px]" />

      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="contact-content opacity-0">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              04
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
              Contact
            </span>
          </div>
        </div>

        <div className="contact-hr line-shimmer line-shimmer-delay-3 my-12 h-px w-full origin-left bg-[var(--border-color)]" />

        <div className="contact-cta opacity-0">
          <h2 className="font-[family-name:var(--font-clash)] text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can bring your digital vision to life.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              onClick={openMail}
              className="magnetic-btn group relative overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-medium tracking-widest uppercase text-white transition-all hover:shadow-[0_0_40px_rgba(59,159,216,0.3)] sm:px-10 sm:py-5"
            >
              <span className="relative z-10">Start a Conversation</span>
              <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
            </button>

            <button
              onClick={openMail}
              className="magnetic-btn flex items-center justify-center gap-2 rounded-full border border-[var(--border-color)] px-8 py-4 text-sm tracking-widest uppercase text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-10 sm:py-5"
            >
              Say Hello
            </button>
          </div>
        </div>

        {/* Contact details */}
        <div className="contact-details mt-24 grid gap-8 opacity-0 sm:grid-cols-3">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              Location
            </span>
            <p className="mt-2 flex items-center gap-2 text-[var(--foreground)]">
              {/* Swiss flag */}
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#FF0000] shadow-[0_0_8px_rgba(255,0,0,0.3)]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="4" y="1.5" width="2" height="7" rx="0.5" fill="white" />
                  <rect x="1.5" y="4" width="7" height="2" rx="0.5" fill="white" />
                </svg>
              </span>
              <span className="switzerland-glow">Switzerland</span>
            </p>
            <p className="text-sm text-[var(--muted)]">Available worldwide</p>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              Email
            </span>
            <button
              onClick={openMail}
              className="mt-2 block text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              Get in Touch &rarr;
            </button>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
              Website
            </span>
            <a
              href="https://sappy.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              sappy.ch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
