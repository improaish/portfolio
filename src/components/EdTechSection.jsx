import React from 'react';
import { Bot, MonitorPlay, FolderTree } from 'lucide-react';
import { edTechData } from '../data/portfolioData';

const iconMap = {
  Bot,
  MonitorPlay,
  FolderTree
};

export default function EdTechSection() {
  return (
    <section id="edtech" className="py-20 lg:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyanAccent-400 mb-2">
            {edTechData.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {edTechData.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {edTechData.description}
          </p>
        </div>

        {/* 3 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {edTechData.cards.map((card) => {
            const Icon = iconMap[card.icon] || Bot;
            return (
              <div
                key={card.id}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-electric-950 border border-electric-500/20 flex items-center justify-center text-cyanAccent-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
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
