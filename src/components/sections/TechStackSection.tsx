'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { allSkills } from '@/data/skills';

// Double the list so the marquee loops seamlessly
const skills = [...allSkills, ...allSkills];

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="section-padding bg-section-gradient"
      id="tech-stack"
      aria-label="Technologies and skills"
    >
      <div className="container-site" style={{ marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            Tech Stack
          </div>
          <h2 className="heading-lg text-balance">
            Tools I work with
          </h2>
          <p className="body-lg" style={{ maxWidth: '38rem', marginInline: 'auto', marginTop: '0.75rem' }}>
            From frontend frameworks to DevOps tooling — here&apos;s what powers my production applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="marquee-wrapper"
        aria-hidden="true"
        style={{ marginBottom: '0.75rem' }}
      >
        <div className="marquee-track animate-marquee">
          {skills.map((skill, i) => (
            <span key={`a-${i}`} className="tech-pill">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Marquee row 2 — reversed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="marquee-wrapper"
        aria-hidden="true"
      >
        <div className="marquee-track animate-marquee-reverse">
          {[...skills].reverse().map((skill, i) => (
            <span key={`b-${i}`} className="tech-pill">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
