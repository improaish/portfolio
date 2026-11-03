import React from 'react';
import {
  Boxes,
  Network,
  Target,
  SearchCheck,
  KeyRound,
  LayoutTemplate,
  BookOpenCheck,
  FileSpreadsheet
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
    <section id="content-architecture" className="py-20 lg:py-24 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {contentArchitectureData.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {contentArchitectureData.description}
          </p>
        </div>

        {/* 8 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contentArchitectureData.cards.map((card) => {
            const Icon = iconMap[card.icon] || Boxes;
            return (
              <div
                key={card.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-electric-950 border border-electric-500/20 flex items-center justify-center text-cyanAccent-400 mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
