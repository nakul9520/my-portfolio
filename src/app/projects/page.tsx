import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { personal } from '@/data/personal';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore ${personal.name}'s production-grade projects including Healthcare SaaS, E-commerce platforms, and B2B websites.`,
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header bg-hero-gradient" aria-label="Projects page header">
        <div className="container-site">
          <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            Portfolio
          </div>
          <h1 className="heading-xl text-balance" style={{ marginBottom: '1.25rem' }}>
            Production projects,{' '}
            <span className="text-gradient">real impact</span>
          </h1>
          <p className="body-lg text-balance" style={{ maxWidth: '44rem', marginInline: 'auto' }}>
            Every project here is shipped to production, solving real-world problems at scale.
            From Healthcare SaaS to multi-currency E-commerce platforms.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding" aria-label="All projects">
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="card"
                style={{ padding: '0', overflow: 'hidden' }}
                aria-label={project.title}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, var(--color-surface-2), var(--color-surface-1))',
                    borderBottom: '1px solid var(--color-surface-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <span className="project-number">Project 0{project.order}</span>
                    <h2 className="heading-md" style={{ marginBottom: '0.375rem' }}>
                      {project.title}
                    </h2>
                    <p style={{ color: 'var(--color-accent-400)', fontWeight: 500, fontSize: '0.9375rem' }}>
                      {project.subtitle}
                    </p>
                  </div>
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outlined btn-sm"
                    >
                      Live →
                    </a>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))', gap: '2rem' }}>
                  {/* Description */}
                  <div>
                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Overview</h3>
                    <p className="body-md" style={{ marginBottom: '1.25rem' }}>
                      {project.description}
                    </p>

                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>The Challenge</h3>
                    <p className="body-md">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Impact + Tech */}
                  <div>
                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Key Impact</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                      {project.impact.map((item, i) => (
                        <div key={i} className="project-impact-item">
                          {item}
                        </div>
                      ))}
                    </div>

                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Tech Stack</h3>
                    <div className="project-tech-list">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="neutral">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
