import type { Metadata } from 'next';
import Link from 'next/link';
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
            From Healthcare SaaS to multi-currency E-commerce platforms. Click any project to view its full case study.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding" aria-label="All projects">
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {projects.map((project) => (
              <article
                key={project.id}
                className="card group hover:border-indigo-500/20 transition-all duration-300"
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
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Top Bar: Number/Badge on Left, Live Button on Right */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      width: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <span className="project-number inline-flex items-center">Project 0{project.order}</span>
                      <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outlined btn-sm"
                        style={{ flexShrink: 0 }}
                      >
                        Live →
                      </a>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="heading-md" style={{ marginBottom: '0.375rem' }}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:text-indigo-400 transition-colors duration-200"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p style={{ color: 'var(--color-accent-400)', fontWeight: 500, fontSize: '0.9375rem', lineHeight: '1.4' }}>
                      {project.subtitle}
                    </p>
                  </div>
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
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Key Impact</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                      {project.impact.slice(0, 3).map((item, i) => (
                        <div key={i} className="project-impact-item">
                          {item}
                        </div>
                      ))}
                    </div>

                    <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Tech Stack</h3>
                    <div className="project-tech-list" style={{ marginBottom: 'auto' }}>
                      {project.techStack.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="neutral">{tech}</Badge>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="text-xs font-semibold text-zinc-500 self-center">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* View Details Link */}
                    <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="btn btn-soft btn-sm text-indigo-400 hover:text-indigo-300 font-semibold group/link"
                      >
                        View Case Study
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform group-hover/link:translate-x-1 transition-transform duration-200"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
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
