import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Cpu,
  Globe,
  Layers,
  Compass
} from 'lucide-react';
import { interestsData } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Sparkles,
  Cpu,
  Globe,
  Layers,
  Compass
};

export default function Expertise() {
  return (
    <section id="interests" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Areas of Interest
          </h2>
          <p className="text-sm text-slate-400">
            Technical interests and focused exploratory domains.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interestsData.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-950/80 border border-electric-500/20 flex items-center justify-center text-cyanAccent-400 mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
