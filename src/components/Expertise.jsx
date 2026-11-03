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
  Compass
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
    <section id="expertise" className="py-20 lg:py-24 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Areas of Interest &amp; Technical Expertise
          </h2>
          <p className="text-sm text-slate-400">
            Foundational competencies, technical interests, and hands-on exploratory areas.
          </p>
        </div>

        {/* 9 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalExpertiseData.map((item) => {
            const Icon = iconMap[item.icon] || Brain;
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-950/80 border border-electric-500/20 flex items-center justify-center text-cyanAccent-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
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
