import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-16 lg:py-20 border-t border-slate-900 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Certifications &amp; Professional Courses
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Selected learning across applied AI, cloud computing, content strategy, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {certificationsData.map((certificate) => (
            <article
              key={certificate.id}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 hover:border-slate-700 transition-colors duration-200"
            >
              {certificate.image && (
                <img
                  src={certificate.image}
                  alt={certificate.imageAlt || `${certificate.name} certificate`}
                  loading="lazy"
                  className="mb-4 max-h-40 w-full rounded-lg bg-navy-950 object-contain"
                />
              )}

              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg border border-cyanAccent-500/20 bg-cyanAccent-500/10 p-2 text-cyanAccent-400">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold leading-snug text-white">
                    {certificate.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cyanAccent-400">
                    {certificate.issuer}
                  </p>
                </div>
              </div>

              {certificate.verificationUrl && /^https?:\/\//i.test(certificate.verificationUrl) && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyanAccent-400 transition-colors"
                >
                  View credential
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
