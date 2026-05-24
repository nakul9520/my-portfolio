import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AIPreviewSection } from '@/components/sections/AIPreviewSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Nakul Yadav — React.js & Frontend Developer',
  description: 'React.js Developer with 4+ years building production-grade web applications across Healthcare SaaS, E-commerce, and B2B domains. Based in Indore, India.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <AIPreviewSection />
      <CTASection />
    </>
  );
}
