import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Internship &amp; Professional Experience
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hands-on technical internships providing practical exposure in IoT, software development, AI assistance, ethical hacking, and embedded engineering.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical central/left timeline guide line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-electric-500 via-sky-600/40 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experienceData.map((exp, index) => {
              const isCurrent = exp.status === 'Current';

              return (
                <div
                  key={exp.id}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline Node Point */}
                  <div className="hidden md:flex absolute left-5 top-7 -translate-x-1/2 w-6 h-6 rounded-full bg-navy-950 border-2 border-electric-500 items-center justify-center group-hover:scale-125 group-hover:border-cyanAccent-400 transition-all duration-300 shadow-md shadow-electric-500/30">
                    <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-cyanAccent-400 animate-pulse' : 'bg-electric-500'}`} />
                  </div>

                  {/* Experience Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/90 relative group-hover:border-slate-700 transition-all duration-300">
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      
                      {/* Left: Organization & Role */}
                      <div className="flex items-start gap-4">
                        {/* Org Icon / Placeholder Badge */}
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyanAccent-400 shrink-0 group-hover:border-electric-500/40 transition-colors">
                          <Building2 className="w-6 h-6" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
                              {exp.organization}
                            </h3>
                            {isCurrent && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                                Current Role
                              </span>
                            )}
                          </div>
                          
                          <div className="text-sm sm:text-base font-semibold text-electric-400">
                            {exp.role}
                          </div>
                        </div>
                      </div>

                      {/* Right: Duration & Location Badges */}
                      <div className="flex flex-wrap sm:flex-col lg:items-end gap-2 text-xs text-slate-300">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-cyanAccent-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Domain Tag */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="text-xs text-slate-400 font-medium">
                        Technical Focus: <span className="text-slate-200 font-semibold">{exp.domain}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        0{index + 1} / 0{experienceData.length}
                      </span>
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
