import React, { useEffect, useState } from 'react';
import { ArrowLeft, PenSquare, Sparkles } from 'lucide-react';
import { writingSamplesData } from '../data/portfolioData';

const iconMap = {
  'Video Script': PenSquare,
  'Blog Feature': Sparkles
};

export default function WritingSamples() {
  const [selectedSample, setSelectedSample] = useState(null);

  useEffect(() => {
    if (!selectedSample) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedSample(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSample]);

  return (
    <section id="writing-samples" className="py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Featured Contents
          </h2>
          <p className="text-sm text-slate-400">
            Featured work across scriptwriting and modern digital storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {writingSamplesData.map((sample) => {
            const Icon = iconMap[sample.category] || PenSquare;
            return (
              <button
                type="button"
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className="group w-full text-left rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanAccent-400 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyanAccent-400">
                    {sample.category}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyanAccent-500/20 bg-cyanAccent-500/10 text-cyanAccent-400">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {sample.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-300 mb-4">
                  {sample.description}
                </p>

                <p className="text-xs leading-relaxed text-slate-400 border-t border-slate-800 pt-4">
                  {sample.detail}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cyanAccent-400 group-hover:text-cyanAccent-300">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedSample && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-navy-950/95 px-4 py-8 backdrop-blur-sm sm:px-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedSample(null);
          }}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="writing-sample-title"
            className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedSample(null)}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cyanAccent-400 hover:text-cyanAccent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanAccent-400 rounded"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to featured contents
            </button>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyanAccent-400">
              {selectedSample.category}
            </p>
            <h2 id="writing-sample-title" className="mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
              {selectedSample.title}
            </h2>
            <p className="mb-8 border-b border-slate-800 pb-8 text-base leading-relaxed text-slate-300">
              {selectedSample.description}
            </p>

            <div className="space-y-8">
              {selectedSample.content.map((section) => (
                <section key={section.heading}>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {section.heading}
                  </h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
