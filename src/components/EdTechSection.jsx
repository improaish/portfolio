import React from 'react';
import {
  GraduationCap,
  Bot,
  MonitorPlay,
  FolderTree,
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { edTechData } from '../data/portfolioData';

const cardIconMap = {
  Bot,
  MonitorPlay,
  FolderTree
};

export default function EdTechSection() {
  return (
    <section id="edtech" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{edTechData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {edTechData.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {edTechData.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-4" />
        </div>

        {/* 3 Visual EdTech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {edTechData.cards.map((card, idx) => {
            const Icon = cardIconMap[card.icon] || Bot;
            return (
              <div
                key={card.id}
                className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-slate-700/80 hover:border-cyanAccent-400/50 shadow-xl hover:shadow-2xl hover:shadow-cyanAccent-500/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle card glow overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyanAccent-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyanAccent-500/10 transition-colors" />

                <div>
                  {/* Top indicator & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-electric-950 border border-electric-500/30 flex items-center justify-center text-cyanAccent-300 group-hover:scale-110 group-hover:border-cyanAccent-400/60 transition-all duration-300 shadow-lg shadow-electric-950/80">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-cyanAccent-300 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-medium text-electric-400 mb-4">
                    {card.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Focus areas / bullet points */}
                <div className="pt-5 border-t border-slate-800/80">
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                    Focus Dimensions:
                  </div>
                  <ul className="space-y-2">
                    {card.focusAreas.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyanAccent-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
