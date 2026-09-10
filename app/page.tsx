'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax Hero Effect
    if (heroRef.current && textRef.current) {
      gsap.to(textRef.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Projects Fade In
    if (projectsRef.current) {
      const cards = gsap.utils.toArray('.project-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-primary text-background"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Abstract geometric background elements could go here */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mt-20 md:mt-0">
          <div className="text-center md:text-left max-w-xl" ref={textRef}>
            <h2 className="font-mono text-accent mb-4 tracking-wider">Hello, I am</h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Vier.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-mono mb-8 max-w-2xl mx-auto md:mx-0">
              Data Science & Web Developer. <br/>
              Building intelligent systems and modern digital experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link 
                href="/projects" 
                className="px-8 py-4 bg-accent hover:bg-blue-700 text-white font-bold rounded-none transition-colors duration-200"
              >
                View My Work
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 border-2 border-secondary hover:border-white text-white font-bold rounded-none transition-colors duration-200"
              >
                About Me
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-[20px_20px_0px_0px_rgba(37,99,235,1)] transition-transform duration-300 hover:scale-105">
              <Image 
                src="/vier.jpeg" 
                alt="Javier Nur Hidayat (Vier)" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Projects</h2>
              <div className="h-2 w-24 bg-accent mt-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.id}
                className="project-card group block cursor-pointer"
              >
                <div className="bg-white border-2 border-gray-100 overflow-hidden shadow-sm hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                    <Image 
                      src={project.thumbnail} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center md:text-left">
                    <p className="text-accent font-mono text-sm mb-2">{project.platform}</p>
                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-secondary line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white font-bold transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
