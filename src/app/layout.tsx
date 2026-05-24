import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/layout/Providers';
import { AIAssistant } from '@/components/ai-assistant/AIAssistant';
import { personal } from '@/data/personal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nakulyadav.dev'),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: `${personal.name} is a React.js & Frontend Developer with ${personal.yearsExperience} years of experience building production-grade web applications across Healthcare SaaS, E-commerce, and B2B domains.`,
  keywords: [
    'React.js Developer',
    'Frontend Developer',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'Nakul Yadav',
    'Frontend Engineer',
    'Indore',
    'India',
    'Web Development',
  ],
  authors: [{ name: personal.name, url: 'https://nakulyadav.dev' }],
  creator: personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nakulyadav.dev',
    siteName: `${personal.name} Portfolio`,
    title: `${personal.name} — ${personal.title}`,
    description: `React.js Developer with ${personal.yearsExperience}+ years building scalable production applications.`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} — ${personal.title}`,
    description: `React.js Developer with ${personal.yearsExperience}+ years building scalable production applications.`,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: 'hsl(222, 22%, 4%)',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Providers>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <AIAssistant />
        </Providers>
      </body>
    </html>
  );
}
