import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  PlusCircle,
  Sparkles,
  Clock,
  Code2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & EdTech', 'EdTech & Content Architecture', 'IoT & Emerging Tech', 'Web Development'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-electric-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio Ready</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Projects &amp; Practical Work
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Modular architecture configured for upcoming projects across Artificial Intelligence, EdTech platforms, and emerging technologies.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-4" />
          </div>

          {/* Quick Notice for Recruiters */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 self-start md:self-auto">
            <Clock className="w-4 h-4 text-cyanAccent-400" />
            <span>Structured placeholders &bull; New projects coming online</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group hover:border-cyanAccent-500/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Top / Thumbnail Placeholder */}
              <div>
                <div className="relative h-48 bg-gradient-to-br from-navy-900 via-slate-900 to-navy-950 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                  
                  {/* Subtle Tech Grid inside thumbnail */}
                  <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                  {/* Top Bar inside thumbnail */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-950/90 border border-slate-700/80 text-cyanAccent-300">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-electric-950/90 border border-electric-500/40 text-electric-300">
                      <Clock className="w-3 h-3" />
                      {project.status}
                    </span>
                  </div>

                  {/* Thumbnail Central Graphic */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyanAccent-400 group-hover:border-cyanAccent-500/40 transition-colors shadow-inner">
                      <Code2 className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Bar inside thumbnail */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>STATUS: ACTIVE_MODULE</span>
                    <span>READY FOR DATA</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyanAccent-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-slate-300 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto">
                <div className="flex items-center justify-between pt-4">
                  <a
                    href={project.githubUrl}
                    onClick={(e) => {
                      if (project.githubUrl === '#') {
                        e.preventDefault();
                        alert('GitHub repository placeholder. Link your repo anytime in portfolioData.js.');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    onClick={(e) => {
                      if (project.liveDemoUrl === '#') {
                        e.preventDefault();
                        alert('Live demo placeholder. Connect your deployment link in portfolioData.js.');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyanAccent-400 hover:text-cyanAccent-300 transition-colors py-1.5 px-3 rounded-lg bg-electric-950/60 hover:bg-electric-900/60 border border-electric-500/30"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Developer / Recruiter Note on Project Extensibility */}
        <div className="mt-12 p-5 rounded-2xl bg-navy-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-electric-950 border border-electric-500/30 text-cyanAccent-400">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Adding Projects is Straightforward
              </div>
              <div className="text-xs text-slate-400">
                To link a new live project, simply update the entry in <code className="text-cyanAccent-300 font-mono">src/data/portfolioData.js</code>.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-cyanAccent-400 hover:underline shrink-0"
          >
            Inquire about upcoming projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
