import React from 'react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const project = projectsData[0];
  if (!project) return null;

  return (
    <section id="projects" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Featured Project
            </h2>
            <p className="text-sm text-slate-400">
              Practical work in Content Architecture and digital learning solutions.
            </p>
          </div>

          <a
            href="https://github.com/improaish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/improaish</span>
          </a>
        </div>

        {/* Featured Project Card */}
        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-semibold text-cyanAccent-400">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800/90 text-cyanAccent-300 border border-slate-700/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent-400 animate-pulse" />
                <span>{project.status}</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <span className="text-xs text-slate-400 font-mono">
                @improaish
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
