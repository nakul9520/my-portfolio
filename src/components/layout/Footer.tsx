import Link from 'next/link';
import { personal } from '@/data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container-site footer-inner">
        <p className="footer-copy">
          © {year} {personal.name}. Built with Next.js & ❤️
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/projects" className="footer-link">Projects</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <a
            href={personal.social.github}
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={personal.social.linkedin}
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
