import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Internship &amp; Professional Experience
          </h2>
          <p className="text-sm text-slate-400">
            Practical industry exposure across IoT, software development, cybersecurity, and embedded systems.
          </p>
        </div>

        {/* Clean Experience List */}
        <div className="space-y-4">
          {experienceData.map((exp) => {
            const isCurrent = exp.status === 'Current';
            return (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {exp.organization}
                    </h3>
                    {isCurrent && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-cyanAccent-400">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
