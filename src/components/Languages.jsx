import React from 'react';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section className="py-10 border-t border-slate-900 bg-navy-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Language Proficiency</h3>
            <p className="text-xs text-slate-400">Communication across professional and technical settings</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-center gap-2"
              >
                <span className="font-semibold text-white">{lang.language}:</span>
                <span className="text-slate-300">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
