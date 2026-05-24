import type { Metadata } from 'next';
import { personal } from '@/data/personal';
import { ContactForm } from './ContactForm';


export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${personal.name} — open to full-time roles, freelance projects, and collaborations.`,
};


export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header bg-hero-gradient" aria-label="Contact page header">
        <div className="container-site">
          <div className="section-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            Contact
          </div>
          <h1 className="heading-xl text-balance" style={{ marginBottom: '1.25rem' }}>
            Let&apos;s work{' '}
            <span className="text-gradient">together</span>
          </h1>
          <p className="body-lg text-balance" style={{ maxWidth: '40rem', marginInline: 'auto' }}>
            Have a project in mind or looking for a frontend developer? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Contact details">
        <div
          className="container-site"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '3rem',
          }}
        >
          {/* Left — info */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>
              Get in touch
            </h2>
            <p className="body-md" style={{ marginBottom: '2rem' }}>
              I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
              Response time is usually within 24 hours.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`mailto:${personal.email}`}
                className="social-card"
              >
                <div className="social-card-icon" aria-hidden="true">✉</div>
                <div>
                  <div className="social-card-label">Email</div>
                  <div className="social-card-value">{personal.email}</div>
                </div>
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-card-icon" aria-hidden="true">in</div>
                <div>
                  <div className="social-card-label">LinkedIn</div>
                  <div className="social-card-value">linkedin.com/in/nakulydv</div>
                </div>
              </a>

              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-card-icon" aria-hidden="true">⌥</div>
                <div>
                  <div className="social-card-label">GitHub</div>
                  <div className="social-card-value">github.com/nakul9520</div>
                </div>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                className="social-card"
              >
                <div className="social-card-icon" aria-hidden="true">☎</div>
                <div>
                  <div className="social-card-label">Phone</div>
                  <div className="social-card-value">{personal.phone}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
