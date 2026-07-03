"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { personal } from "@/data/personal";

/* ─────────────────────────────────────────────────────────────
   TYPEWRITER TITLES
   ───────────────────────────────────────────────────────────── */
const TITLES = [
  "React.js Developer",
  "Frontend Engineer",
  "Next.js Specialist",
  "TypeScript Expert",
  "UI/UX Enthusiast",
];

/* ─────────────────────────────────────────────────────────────
   PARTICLE CANVAS BACKGROUND
   ───────────────────────────────────────────────────────────── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDelta: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const createParticles = useCallback((w: number, h: number): Particle[] => {
    const count = Math.floor((w * h) / 10000);
    return Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.6 + 0.3,
      opacity: Math.random() * 0.45 + 0.15,
      opacityDelta: (Math.random() - 0.5) * 0.008,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesRef.current = createParticles(canvas.width, canvas.height);
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    // accent r,g,b matching hsl(265 75% 55%) → #7C3AED-ish → ~139,92,246
    const R = "139, 92, 246";
    const LINK_DIST = 110;
    const MOUSE_R = 130;

    const tick = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const pts = particlesRef.current;
      const m = mouseRef.current;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacityDelta;
        if (p.opacity <= 0.06 || p.opacity >= 0.6) p.opacityDelta *= -1;
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        const dx = p.x - m.x;
        const dy = p.y - m.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_R && d > 0) {
          const f = (MOUSE_R - d) / MOUSE_R;
          p.x += (dx / d) * f * 1.5;
          p.y += (dy / d) * f * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R}, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${R}, ${(1 - dist / LINK_DIST) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   TYPEWRITER HOOK
   ───────────────────────────────────────────────────────────── */
function useTypewriter(
  titles: string[],
  typeSpeed = 75,
  deleteSpeed = 40,
  pause = 1800,
) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[idx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && display === target) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % titles.length);
    } else {
      t = setTimeout(
        () => {
          setDisplay(
            deleting
              ? display.slice(0, -1)
              : target.slice(0, display.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(t);
  }, [display, deleting, idx, titles, typeSpeed, deleteSpeed, pause]);

  return display;
}

/* ─────────────────────────────────────────────────────────────
   STATS DATA
   ───────────────────────────────────────────────────────────── */
const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Production Projects" },
  { value: "3+", label: "Domains Covered" },
  { value: "10+", label: "Tech Stacks Used" },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────────────────────── */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const typed = useTypewriter(TITLES);

  const nameParts = personal.name.split(" "); // ["Nakul","Yadav"]
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section ref={ref} id="hero" aria-label="Introduction" className="hv2-root">
      {/* particle bg — pointer-events none on canvas so mouse events pass through */}
      <div className="hv2-canvas-wrap" aria-hidden="true">
        <ParticleCanvas />
      </div>

      {/* soft ambient orbs */}
      <div className="hv2-orb hv2-orb-tl" aria-hidden="true" />
      <div className="hv2-orb hv2-orb-br" aria-hidden="true" />

      {/* dot-grid overlay */}
      <div className="hv2-grid" aria-hidden="true" />

      {/* ── main content col ── */}
      <div className="container-site hv2-inner">
        <motion.div
          className="hv2-stack"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* 1 ── location / availability label */}
          <motion.p
            className="hv2-location"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="hv2-location-dot" aria-hidden="true" />
            {personal.location}
            <span className="hv2-location-sep" aria-hidden="true">
              ·
            </span>
            Available for Frontend Roles
          </motion.p>

          {/* 2 ── name */}
          <motion.h1
            className="hv2-name"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {firstName} <span className="hv2-name-accent">{lastName}</span>
          </motion.h1>

          {/* 3 ── typewriter row */}
          <motion.div
            className="hv2-typewriter"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            aria-label={`Role: ${typed}`}
          >
            <span className="hv2-tw-bullet" aria-hidden="true" />
            <span className="hv2-tw-text" aria-live="polite">
              {typed}
              <span className="hv2-tw-cursor animate-blink" aria-hidden="true">
                |
              </span>
            </span>
          </motion.div>

          {/* 4 ── description */}
          <motion.p
            className="hv2-desc"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            Building scalable, production-grade web applications across
            Healthcare SaaS, E-commerce, and B2B domains with{" "}
            <strong className="hv2-desc-strong">
              {personal.yearsExperience} years
            </strong>{" "}
            of hands-on experience.
          </motion.p>

          {/* 5 ── CTA buttons */}
          <motion.div
            className="hv2-actions"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/projects"
              className="btn btn-lg hv2-btn-primary"
              id="hero-view-projects"
            >
              View Projects
            </Link>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg hv2-btn-outline"
              id="hero-download-resume"
              aria-label="Download Resume (opens Google Drive)"
            >
              Download Resume
            </a>

            <Link
              href="/contact"
              className="btn btn-lg hv2-btn-ghost"
              id="hero-contact"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* 6 ── stats card */}
          <motion.div
            className="hv2-stats"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            role="list"
            aria-label="Key statistics"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="hv2-stat" role="listitem">
                {i > 0 && <div className="hv2-stat-sep" aria-hidden="true" />}
                <div className="hv2-stat-val">{s.value}</div>
                <div className="hv2-stat-lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 7 ── scroll indicator */}
      <motion.div
        className="hv2-scroll"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hv2-scroll-lbl">SCROLL</span>
        <div className="hv2-scroll-track">
          <div className="hv2-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}
