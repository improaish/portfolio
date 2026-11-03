import React from 'react';
import {
  GraduationCap,
  Calendar,
  Building,
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formal Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Academic Background
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Strong foundational education in Artificial Intelligence, Electronics Engineering, and technical analytical studies.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-4" />
        </div>

        {/* 3 Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800/90 relative group hover:border-cyanAccent-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric-950 border border-electric-500/30 flex items-center justify-center text-cyanAccent-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyanAccent-300">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Qualification Badge */}
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-electric-950/80 border border-electric-500/30 text-electric-300 mb-2">
                  {edu.degree || edu.qualification}
                </span>

                {/* Institution Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyanAccent-300 transition-colors">
                  {edu.institution}
                </h3>

                {/* Specialisation */}
                <div className="text-sm font-semibold text-slate-200 mb-4">
                  Specialisation: <span className="text-cyanAccent-400">{edu.specialisation}</span>
                </div>

                {/* Details */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {edu.details}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Status: <strong className="text-slate-200">{edu.status}</strong></span>
                <span className="font-mono text-cyanAccent-400">#{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
