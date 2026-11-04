import React from 'react';
import {
  Target,
  SearchCheck,
  BookOpenCheck
} from 'lucide-react';
import { contentStrategyData } from '../data/portfolioData';

const iconMap = {
  Target,
  SearchCheck,
  BookOpenCheck
};

export default function ContentArchitecture() {
  return (
    <section id="content-strategy" className="py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            {contentStrategyData.title}
          </h2>
          <p className="text-sm text-slate-400">
            {contentStrategyData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentStrategyData.cards.map((card) => {
            const Icon = iconMap[card.icon] || Target;
            return (
              <div
                key={card.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-electric-950 border border-electric-500/20 flex items-center justify-center text-cyanAccent-400 mb-3.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
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
