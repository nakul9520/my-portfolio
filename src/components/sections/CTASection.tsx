import Link from 'next/link';
import { personal } from '@/data/personal';

export function CTASection() {
  return (
    <section
      className="section-padding"
      id="cta"
      aria-label="Call to action"
    >
      <div className="container-site">
        <div className="cta-card">
          {/* Background glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 60% at 50% 0%, hsl(265 75% 55% / 0.08), transparent)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="section-eyebrow"
              style={{ display: 'inline-flex', marginBottom: '1.25rem' }}
            >
              Open to Work
            </div>

            <h2
              className="heading-lg text-balance"
              style={{ marginBottom: '1rem' }}
            >
              Let&apos;s build something{' '}
              <span className="text-gradient">exceptional</span>{' '}
              together
            </h2>

            <p
              className="body-lg text-balance"
              style={{ maxWidth: '40rem', marginInline: 'auto', marginBottom: '2.5rem' }}
            >
              Looking for a frontend developer who can take ownership, ship fast, and build
              for scale? Let&apos;s talk about your project.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-filled btn-xl">
                Get in Touch
              </Link>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outlined btn-xl"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
