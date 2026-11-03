import React from 'react';
import {
  Brain,
  Cpu,
  Sparkles,
  GraduationCap,
  Globe,
  Layers,
  Radio,
  ShieldCheck,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { technicalExpertiseData } from '../data/portfolioData';

const iconMap = {
  Brain,
  Cpu,
  Sparkles,
  GraduationCap,
  Globe,
  Layers,
  Radio,
  ShieldCheck,
  Compass
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-28 relative bg-navy-950/60">
      {/* Decorative background grid subtle */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Areas of Interest &amp; Technical Expertise
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of academic knowledge, internship exposure, and active exploratory interests across technology domains.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mx-auto mt-4" />
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technicalExpertiseData.map((item) => {
            const Icon = iconMap[item.icon] || Brain;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/90 relative group flex flex-col justify-between hover:border-cyanAccent-500/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Card Header Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-950 to-navy-900 border border-electric-500/30 flex items-center justify-center text-cyanAccent-400 group-hover:text-cyanAccent-300 group-hover:scale-110 group-hover:border-cyanAccent-400/50 transition-all duration-300 shadow-md shadow-electric-950/50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900/60 border border-slate-800">
                      Domain
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyanAccent-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="pt-4 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-300 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
