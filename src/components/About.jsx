import React from 'react';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            {aboutData.title}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyanAccent-400">
            Background &bull; Exposure &bull; Trajectory
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed">
            {aboutData.paragraphs.map((para, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-white text-lg font-medium' : ''}
              >
                {para}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-6 text-sm font-semibold">
              <a
                href="#experience"
                className="text-cyanAccent-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span>View Internships</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="text-electric-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutData.highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80"
              >
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {item.label}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
