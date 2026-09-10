import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">My Projects</h1>
          <div className="h-2 w-24 bg-accent"></div>
          <p className="mt-6 text-secondary text-xl max-w-2xl">
            A collection of projects I have worked on, encompassing Web Development, Data Science, AI, and UI/UX Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white border-2 border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all duration-300 transform hover:-translate-y-2 hover:-translate-x-2">
              <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                <Image 
                  src={project.thumbnail} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-accent font-mono text-sm mb-2">{project.platform}</p>
                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-xs font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-primary">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-accent font-bold hover:text-blue-800 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
