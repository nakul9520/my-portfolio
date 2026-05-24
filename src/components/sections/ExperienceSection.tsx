'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="section-padding"
      id="experience"
      aria-label="Work experience"
    >
      <div className="container-site">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            Experience
          </div>
          <h2 className="heading-lg">
            Where I&apos;ve worked
          </h2>
          <p className="body-lg" style={{ maxWidth: '42rem', marginTop: '0.75rem' }}>
            4+ years of delivering production-grade applications across diverse domains —
            each role pushing the boundaries of frontend architecture.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}

function ExperienceCard({ exp, index, inView }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // The second card gets a scale effect as it overlaps the first
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  const stickyTop = 5 + index * 0.5; // stagger the sticky offset slightly

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="exp-card"
      style={{
        top: `${stickyTop}rem`,
        zIndex: 10 + index * 10,
        marginBottom: index < experiences.length - 1 ? '1.5rem' : 0,
      }}
    >
      <motion.div
        className="exp-card-inner"
        style={{ scale, transformOrigin: 'top center' }}
      >
        {/* Left accent line */}
        <div className="exp-card-accent-line" aria-hidden="true" />

        <div style={{ paddingLeft: '1rem' }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-meta">
                <span>{exp.period}</span>
                <span>·</span>
                <span>{exp.location}</span>
                <span>·</span>
                <span>{exp.type}</span>
              </div>
            </div>
            {exp.current && (
              <Badge variant="success">Current</Badge>
            )}
          </div>

          {/* Summary */}
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {exp.summary}
          </p>

          {/* Achievements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}>
            {exp.achievements.map((achievement, i) => (
              <div key={i} className="exp-achievement">
                {achievement}
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {exp.techStack.map((tech) => (
              <Badge key={tech} variant="neutral">{tech}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
