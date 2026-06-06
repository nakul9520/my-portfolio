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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="project-card block group hover:border-indigo-500/20 transition-all duration-300 height-full flex flex-col"
                aria-label={`View case study for ${project.title}`}
              >
                {/* Card header */}
                <div className="project-card-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div className="project-number inline-flex items-center">
                      Project 0{project.order}
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="project-title group-hover:text-indigo-400 transition-colors duration-200">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="project-card-body flex-grow flex flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%' }}>
                  <div>
                    <p className="project-description">{project.description}</p>

                    {/* Impact */}
                    <div className="project-impact">
                      {project.impact.slice(0, 2).map((item, i) => (
                        <div key={i} className="project-impact-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="project-tech-list" style={{ marginBottom: '1.25rem' }}>
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="neutral">{tech}</Badge>
                      ))}
                      {project.techStack.length > 5 && (
                        <Badge variant="neutral">+{project.techStack.length - 5} more</Badge>
                      )}
                    </div>

                    {/* View Case Study Arrow Link */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                      <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors duration-200">
                        View Case Study
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform group-hover:translate-x-1 transition-transform duration-200"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
