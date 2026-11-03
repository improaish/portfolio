import React from 'react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Projects &amp; Work
            </h2>
            <p className="text-sm text-slate-400">
              Featured work and upcoming applications.
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

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-cyanAccent-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
