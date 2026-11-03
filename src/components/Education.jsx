import React from 'react';
import { Calendar } from 'lucide-react';
import { educationData, languagesData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Academic Background
          </h2>
          <p className="text-sm text-slate-400">
            Education and qualifications.
          </p>
        </div>

        {/* 3 Clean Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase text-cyanAccent-400">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {edu.institution}
                </h3>

                <p className="text-xs text-slate-300">
                  {edu.degree}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Languages Row */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 font-medium">Languages:</span>
          <div className="flex flex-wrap gap-4">
            {languagesData.map((lang) => (
              <span key={lang.language} className="text-slate-300">
                <strong className="text-white">{lang.language}</strong> — {lang.proficiency}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
