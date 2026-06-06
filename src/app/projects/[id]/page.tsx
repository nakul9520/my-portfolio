import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectSlider } from '@/components/ui/ProjectSlider';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500 selection:text-white pb-24 pt-16">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container-site max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 mb-8 group focus-ring rounded-lg px-2 py-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Title Block */}
        <header className="mb-10">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            {project.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </header>

        {/* Project Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Left/Center) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Gallery Slider Section */}
            {project.gallery && project.gallery.length > 0 && (
              <section aria-label="Project media gallery">
                <ProjectSlider items={project.gallery} />
              </section>
            )}

            {/* Case Study Details */}
            <section className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Project Overview</h2>
                  <p className="text-zinc-300 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">The Challenge</h2>
                  <p className="text-zinc-300 leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">The Solution</h2>
                  <p className="text-zinc-300 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Key Highlights</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-zinc-300 flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Project Impact</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {project.impact.map((imp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950/40 border border-white/5"
                      >
                        <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 text-sm font-semibold">
                          {idx + 1}
                        </div>
                        <p className="text-zinc-300 leading-normal">{imp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Metadata Column (Right) */}
          <div className="space-y-6">
            {/* Project Specs Card */}
            <aside className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm space-y-6">
              <h2 className="text-lg font-bold text-white border-b border-white/5 pb-3">
                Project Details
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-1">
                    Role
                  </div>
                  <div className="text-zinc-200 font-medium">{project.role}</div>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-1">
                    Duration
                  </div>
                  <div className="text-zinc-200 font-medium">{project.duration}</div>
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-1">
                    Category
                  </div>
                  <div className="text-zinc-200 font-medium">{project.category}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                {project.links?.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-filled btn-md justify-center text-center font-semibold"
                  >
                    Visit Website
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn btn-filled btn-md justify-center opacity-50 cursor-not-allowed font-semibold"
                  >
                    Not Deployed (Internal / Confidential)
                  </button>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-md justify-center border border-white/10 hover:border-white/20 text-center font-semibold"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </aside>

            {/* Tech Stack Card */}
            <aside className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-950/80 text-zinc-300 border border-white/5 hover:border-indigo-500/20 hover:text-indigo-400 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
