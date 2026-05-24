'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      ref={ref}
      className="section-padding bg-section-gradient"
      id="projects"
      aria-label="Featured projects"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div>
            <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              Featured Work
            </div>
            <h2 className="heading-lg">Production projects</h2>
            <p className="body-lg" style={{ maxWidth: '40rem', marginTop: '0.75rem' }}>
              Real-world applications shipped to production — each solving complex challenges
              at scale.
            </p>
          </div>
          <Link href="/projects" className="btn btn-outlined btn-md">
            All Projects →
          </Link>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))', gap: '1.25rem' }}>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="project-card"
              aria-label={project.title}
            >
              {/* Card header */}
              <div className="project-card-header">
                <div className="project-number">
                  Project 0{project.order}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="project-card-body">
                <p className="project-description">{project.description}</p>

                {/* Impact */}
                <div className="project-impact">
                  {project.impact.slice(0, 2).map((item, i) => (
                    <div key={i} className="project-impact-item">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="project-tech-list">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="neutral">{tech}</Badge>
                  ))}
                  {project.techStack.length > 5 && (
                    <Badge variant="neutral">+{project.techStack.length - 5} more</Badge>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
