"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { personal } from "@/data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="hero-section bg-hero-gradient"
      id="hero"
      aria-label="Introduction"
    >
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1 animate-float" aria-hidden="true" />
      <div
        className="hero-orb hero-orb-2 animate-float-delayed"
        aria-hidden="true"
      />

      <div className="container-site hero-content">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="hero-badge" role="status">
              <span className="hero-status-dot" aria-hidden="true" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-description text-balance"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {personal.title} — Building production-grade, scalable web
            applications across Healthcare SaaS, E-commerce, and B2B domains
            with{" "}
            <strong
              style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              {personal.yearsExperience} years
            </strong>{" "}
            of hands-on experience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-actions"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Link href="/projects" className="btn btn-filled btn-lg">
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-outlined btn-lg">
              Contact Me
            </Link>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
              aria-label="Download Resume (opens Google Drive)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2v8M5 7l3 3 3-3M3 12h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "4+", label: "Years Experience" },
              { value: "5+", label: "Production Projects" },
              { value: "3+", label: "Domains Covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value text-gradient">
                  {stat.value}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
