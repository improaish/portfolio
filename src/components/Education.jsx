import React from 'react';
import { Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Academic Background
          </h2>
          <p className="text-sm text-slate-400">
            Formal education in Artificial Intelligence, Electronics Engineering, and technical disciplines.
          </p>
        </div>

        {/* 3 Clean Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase text-cyanAccent-400">
                    {edu.degree || edu.qualification}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {edu.institution}
                </h3>

                <p className="text-sm text-slate-300">
                  Specialisation: <span className="text-white font-medium">{edu.specialisation}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Status: <span className="text-slate-300 font-medium">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
