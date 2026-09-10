import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/projects" className="inline-flex items-center text-secondary hover:text-primary mb-8 font-mono text-sm transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="mb-12">
          <p className="text-accent font-mono mb-4 tracking-wider">{project.platform} · {project.year}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{project.title}</h1>
          <div className="h-2 w-24 bg-accent mb-8"></div>
        </div>

        <div className="relative h-64 md:h-96 w-full bg-gray-200 mb-12 border-4 border-primary shadow-[10px_10px_0px_0px_rgba(24,24,27,1)]">
          <Image 
            src={project.thumbnail} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Description</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
              <ul className="list-none space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-3 mt-1 font-bold">✓</span>
                    <span className="text-secondary text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 border-2 border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">My Role</h3>
              <p className="text-primary font-medium text-lg">{project.role}</p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Year</h3>
              <p className="text-primary font-medium text-lg">{project.year}</p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-sm font-mono text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
