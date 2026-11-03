import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section className="py-12 bg-navy-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-electric-950 border border-electric-500/30 text-cyanAccent-400">
              <LanguagesIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Language Proficiency</h3>
              <p className="text-xs text-slate-400">Effective communication across multicultural and professional technical settings</p>
            </div>
          </div>

          {/* Language Cards */}
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="flex-1 md:flex-none glass-card px-5 py-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-6 min-w-[240px]"
              >
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{lang.language}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanAccent-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {lang.proficiency}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-electric-950/80 border border-electric-500/30 text-[11px] font-mono text-cyanAccent-300">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
