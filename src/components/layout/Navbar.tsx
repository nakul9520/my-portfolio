'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`navbar-root${scrolled ? ' navbar-scrolled' : ''}`}
      role="banner"
    >
      <nav className="container-site navbar-inner" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="Nakul Yadav — Home">
          <span className="navbar-logo-mark" aria-hidden="true">N</span>
          <span className="navbar-logo-text">Nakul<span className="text-gradient">.</span></span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links" role="list">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link${isActive ? ' navbar-link-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <Link
            href="/contact"
            className="btn btn-soft btn-sm"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger focus-ring"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`hamburger-line${mobileOpen ? ' hamburger-line-top-open' : ''}`} />
          <span className={`hamburger-line${mobileOpen ? ' hamburger-line-mid-open' : ''}`} />
          <span className={`hamburger-line${mobileOpen ? ' hamburger-line-bot-open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="navbar-mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <ul role="list">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`navbar-mobile-link${isActive ? ' navbar-mobile-link-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" className="btn btn-filled btn-lg" style={{ width: '100%' }}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
