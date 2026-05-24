import type { Metadata } from 'next';
import { personal } from '@/data/personal';
import { skillGroups } from '@/data/skills';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${personal.name} — a React.js Developer with ${personal.yearsExperience}+ years of experience building production-grade frontend applications.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header bg-hero-gradient" aria-label="About page header">
        <div className="container-site">
          <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            About Me
          </div>
          <h1 className="heading-xl text-balance" style={{ marginBottom: '1.25rem' }}>
            Building the web,{' '}
            <span className="text-gradient">one component</span>{' '}
            at a time
          </h1>
          <p className="body-lg text-balance" style={{ maxWidth: '48rem', marginInline: 'auto' }}>
            {personal.bio[0]}
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding" aria-label="Biography">
        <div className="container-site" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))', gap: '3rem' }}>
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.25rem' }}>My story</h2>
            {personal.bio.map((para, i) => (
              <p key={i} className="body-md" style={{ marginBottom: '1rem' }}>
                {para}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.25rem' }}>Quick facts</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Location', value: personal.location },
                { label: 'Experience', value: `${personal.yearsExperience} years` },
                { label: 'Email', value: personal.email },
                { label: 'MCA', value: 'SAGE University, Indore (CGPA: 8.06)' },
                { label: 'BCA', value: 'Suyash Computer, Dhamnod (CGPA: 7.10)' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem' }}>
                  <span className="label-sm" style={{ width: '6rem', flexShrink: 0, paddingTop: '0.125rem' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '72rem', marginInline: 'auto', paddingInline: '1.5rem' }} />

      {/* Skills */}
      <section className="section-padding" aria-label="Skills and technologies">
        <div className="container-site">
          <h2 className="heading-md" style={{ marginBottom: '2.5rem' }}>
            Skills & Technologies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 18rem), 1fr))', gap: '1.5rem' }}>
            {skillGroups.map((group) => (
              <div key={group.category} className="card" style={{ padding: '1.5rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
                  {group.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="neutral">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '72rem', marginInline: 'auto', paddingInline: '1.5rem' }} />

      {/* Timeline — experience summary */}
      <section className="section-padding" aria-label="Work history">
        <div className="container-site" style={{ maxWidth: '52rem' }}>
          <h2 className="heading-md" style={{ marginBottom: '2.5rem' }}>
            Work history
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp) => (
              <div
                key={exp.id}
                style={{ display: 'flex', gap: '1.5rem' }}
                role="article"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                {/* Timeline dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-line" style={{ flex: 1, width: '1px', marginTop: '0.5rem', background: 'var(--color-surface-border)' }} />
                </div>

                <div style={{ paddingBottom: '2rem' }}>
                  <div style={{ marginBottom: '0.875rem' }}>
                    <div className="heading-sm">{exp.role}</div>
                    <div style={{ color: 'var(--color-accent-400)', fontWeight: 500, marginTop: '0.125rem' }}>
                      {exp.company}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="body-md">{exp.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
