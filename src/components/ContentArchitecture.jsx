import React from 'react';
import {
  Boxes,
  Network,
  Target,
  SearchCheck,
  KeyRound,
  LayoutTemplate,
  BookOpenCheck,
  FileSpreadsheet,
  Layers,
  Sparkles
} from 'lucide-react';
import { contentArchitectureData } from '../data/portfolioData';

const iconMap = {
  Boxes,
  Network,
  Target,
  SearchCheck,
  KeyRound,
  LayoutTemplate,
  BookOpenCheck,
  FileSpreadsheet
};

export default function ContentArchitecture() {
  return (
    <section id="content-architecture" className="py-20 lg:py-28 relative bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-xs font-semibold text-cyanAccent-300 uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complementary Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {contentArchitectureData.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {contentArchitectureData.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-500 to-cyanAccent-400 rounded-full mt-4" />
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentArchitectureData.cards.map((card, index) => {
            const Icon = iconMap[card.icon] || Boxes;
            return (
              <div
                key={card.id}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 relative group hover:border-cyanAccent-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Counter */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-900 to-electric-950 border border-electric-500/30 flex items-center justify-center text-cyanAccent-400 group-hover:scale-110 group-hover:border-cyanAccent-400/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-cyanAccent-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Sub-accent line */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>CAPABILITY</span>
                  <span className="text-cyanAccent-400">&bull; ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Positioning Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-navy-900/90 via-navy-850/80 to-navy-900/90 border border-electric-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-white font-bold text-base mb-1">
              Bridging Technical Systems with Information Clarity
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Combining engineering rigor with structured content methodology enables cleaner digital learning platforms, intuitive user journeys, and higher search discoverability.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-md shadow-electric-600/20"
          >
            Discuss Content Architecture
          </a>
        </div>

      </div>
    </section>
  );
}
