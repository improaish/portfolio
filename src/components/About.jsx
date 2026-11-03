import React from 'react';
import {
  Brain,
  GraduationCap,
  Briefcase,
  Compass,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { aboutData, personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {aboutData.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-3" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutData.paragraphs.map((para, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-white font-medium text-lg sm:text-xl leading-relaxed' : ''}
              >
                {para}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyanAccent-400 hover:text-cyanAccent-300 transition-colors"
              >
                <span>View Technical Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 hover:text-electric-300 transition-colors"
              >
                <span>Explore Internships</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Highlights Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutData.highlights.map((highlight, index) => {
              const icons = [Brain, GraduationCap, Briefcase, Layers];
              const IconComponent = icons[index % icons.length];

              return (
                <div
                  key={highlight.label}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/90 relative group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-electric-950/80 border border-electric-500/20 text-cyanAccent-400 group-hover:scale-105 group-hover:border-electric-500/40 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                        {highlight.label}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyanAccent-300 transition-colors">
                        {highlight.value}
                      </div>
                      <div className="text-xs text-slate-400 leading-normal">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
